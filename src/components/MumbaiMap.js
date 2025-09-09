import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-polylinedecorator';
import { transitLines, transitLineCoordinates, transitColors } from '../data/linesData';
import { runDijkstra } from '../utils/graph';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Create custom metro station icon with better styling
const createMetroIcon = (color, isTerminal = false) => {
  const size = isTerminal ? 16 : 12;
  const borderWidth = isTerminal ? 3 : 2;
  
  return L.divIcon({
    className: 'metro-station-icon',
    html: `<div style="
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border: ${borderWidth}px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      position: relative;
    "></div>`,
    iconSize: [size + 4, size + 4],
    iconAnchor: [(size + 4) / 2, (size + 4) / 2]
  });
};

// Create metro line with enhanced styling
const createMetroLine = (coordinates, color) => {
  const polyline = L.polyline(coordinates, {
    color: color,
    weight: 6,
    opacity: 0.9,
    lineCap: 'round',
    lineJoin: 'round'
  });

  // Add a white outline for better visibility
  const outline = L.polyline(coordinates, {
    color: 'white',
    weight: 8,
    opacity: 0.8,
    lineCap: 'round',
    lineJoin: 'round'
  });

  return { polyline, outline };
};

const blueMetroIcon = createMetroIcon(transitColors.blue);
const blueTerminalIcon = createMetroIcon(transitColors.blue, true);

const redMetroIcon = createMetroIcon(transitColors.red);
const redTerminalIcon = createMetroIcon(transitColors.red, true);

const yellowMetroIcon = createMetroIcon(transitColors.yellow);
const yellowTerminalIcon = createMetroIcon(transitColors.yellow, true);

const aquaMetroIcon = createMetroIcon(transitColors.turquoise);
const aquaTerminalIcon = createMetroIcon(transitColors.turquoise, true);

// Component to add enhanced metro line without arrows
function MetroLineWithDecorators({ coordinates, color }) {
  const map = useMap();

  useEffect(() => {
    // Create the metro line with outline
    const { polyline, outline } = createMetroLine(coordinates, color);

    // Add outline first (so it appears behind the main line)
    outline.addTo(map);
    polyline.addTo(map);

    // Cleanup function
    return () => {
      map.removeLayer(outline);
      map.removeLayer(polyline);
    };
  }, [map, coordinates, color]);

  return null;
}

// Component for zoom-responsive station labels
function ZoomResponsiveTooltip({ stationName }) {
  const map = useMap();
  const [zoomLevel, setZoomLevel] = React.useState(map.getZoom());

  useEffect(() => {
    const handleZoom = () => {
      setZoomLevel(map.getZoom());
    };

    map.on('zoom', handleZoom);
    return () => {
      map.off('zoom', handleZoom);
    };
  }, [map]);

  // Calculate font size based on zoom level
  const getFontSize = (zoom) => {
    if (zoom >= 15) return '10px';
    if (zoom >= 14) return '9px';
    if (zoom >= 13) return '8px';
    if (zoom >= 12) return '7px';
    if (zoom >= 11) return '6px';
    return '3px';
  };

  const fontSize = getFontSize(zoomLevel);

  // Hide station names at zoom levels >= 13
  if (zoomLevel < 15) {
    return null;
  }

  return (
    <Tooltip
      direction="right"
      offset={[10, 0]}
      opacity={1}
      permanent={true}
      className="station-label-tooltip"
    >
      <div style={{
        fontSize: fontSize,
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '2px 6px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        whiteSpace: 'nowrap',
        transition: 'font-size 0.2s ease'
      }}>
        {stationName}
      </div>
    </Tooltip>
  );
}

// Generic component to render station markers for a line
function MetroStations({
  stations,
  color,
  normalIcon,
  terminalIcon,
  sourceStation,
  destinationStation,
  routePath,
  selectionMode,
  setSourceStation,
  setDestinationStation,
  computeAndSetRoute,
  handleStationClick,
}) {
  return (
    <>
      {stations.map((station, index) => {
        const isTerminal = index === 0 || index === stations.length - 1;
        const stationIcon = isTerminal ? terminalIcon : normalIcon;
        const isSelected =
          sourceStation?.id === station.id || destinationStation?.id === station.id;
        const inRoute = routePath.find(
          (s) => s.id === station.id && s.line === station.line
        );

        // Only show marker if no route is active, or if this station is in the route
        if (routePath.length > 0 && !inRoute) {
          return null;
        }

        return (
          <Marker
            key={station.id}
            position={station.coordinates}
            icon={stationIcon}
            eventHandlers={{
              click: (e) => {
                e.originalEvent.stopPropagation();
                handleStationClick(station);
              },
            }}
          >
            {/* Zoom-Responsive Station Name Label */}
            <ZoomResponsiveTooltip stationName={station.name} />

            {/* Detailed Popup */}
            <Popup>
              <div style={{ textAlign: 'center', minWidth: '150px' }}>
                <div
                  style={{
                    backgroundColor: color,
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                  }}
                >
                  {station.line}
                </div>
                <strong style={{ fontSize: '14px' }}>{station.name}</strong>
                {isTerminal && (
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#666',
                      marginTop: '4px',
                      fontStyle: 'italic',
                    }}
                  >
                    Terminal Station
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    justifyContent: 'center',
                    marginTop: '8px',
                  }}
                >
                  <button
                    onClick={() => {
                      setSourceStation(station);
                    }}
                    style={{
                      fontSize: '10px',
                      padding: '4px 8px',
                      border: '1px solid #1976d2',
                      background: '#2196f3',
                      color: 'white',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    From
                  </button>
                  <button
                    onClick={() => {
                      setDestinationStation(station);
                      computeAndSetRoute(sourceStation || station, station);
                    }}
                    style={{
                      fontSize: '10px',
                      padding: '4px 8px',
                      border: '1px solid #2e7d32',
                      background: '#4caf50',
                      color: 'white',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    To
                  </button>
                </div>

                {routePath.length > 0 && !inRoute && (
                  <div style={{ fontSize: '10px', color: '#999', marginTop: '4px' }}>
                    Off-route
                  </div>
                )}
                {isSelected && (
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#0066CC',
                      marginTop: '4px',
                      fontWeight: 'bold',
                    }}
                  >
                    {sourceStation?.id === station.id
                      ? 'SELECTED AS SOURCE'
                      : 'SELECTED AS DESTINATION'}
                  </div>
                )}
                {selectionMode && (
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#ff6600',
                      marginTop: '4px',
                      fontWeight: 'bold',
                    }}
                  >
                    Click to select as {selectionMode}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

// Map tile options for clean appearance
const mapTileOptions = {
  cartoLight: {
    name: "Carto Light",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  },
  cartoLightNoLabels: {
    name: "Carto Light (No Labels)",
    url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  },
  cartoVoyagerNoLabels: {
    name: "Carto Voyager (No Labels)",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  },
  cartoDark: {
    name: "Carto Dark",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  },
  stamenToner: {
    name: "Stamen Toner",
    url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  }
};

// Component to set map bounds and view
function MapController() {
  const map = useMap();

  useEffect(() => {
    // Mumbai bounds - covering the entire metropolitan area
    const mumbaiBounds = [
      [18.9, 72.7], // Southwest corner
      [19.3, 73.2]  // Northeast corner
    ];
    
    // Set the map view to fit Mumbai bounds
    map.fitBounds(mumbaiBounds);
    
    // Set minimum zoom to prevent zooming out too far
    map.setMinZoom(10);
    map.setMaxZoom(18);
  }, [map]);

  return null;
}

// Component for station selection UI
function StationSelector({ allStations, sourceStation, destinationStation, onSourceChange, onDestinationChange, onGetRoute }) {
  return (
    <div className="station-selector">
      <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>
        Plan Your Journey
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
          From (Source):
        </label>
        <select 
          value={sourceStation?.id || ''} 
          onChange={(e) => {
            const station = allStations.find(s => s.id === parseInt(e.target.value));
            onSourceChange(station);
          }}
          style={{ 
            fontSize: '11px', 
            padding: '4px 6px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            width: '100%'
          }}
        >
          <option value="">Select Source Station</option>
          {allStations.map(station => (
            <option key={station.id} value={station.id}>
              {station.name} ({station.line})
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
          To (Destination):
        </label>
        <select 
          value={destinationStation?.id || ''} 
          onChange={(e) => {
            const station = allStations.find(s => s.id === parseInt(e.target.value));
            onDestinationChange(station);
          }}
          style={{ 
            fontSize: '11px', 
            padding: '4px 6px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            width: '100%'
          }}
        >
          <option value="">Select Destination Station</option>
          {allStations.map(station => (
            <option key={station.id} value={station.id}>
              {station.name} ({station.line})
            </option>
          ))}
        </select>
      </div>

      <button 
        onClick={onGetRoute}
        disabled={!sourceStation || !destinationStation}
        style={{
          fontSize: '11px',
          padding: '6px 12px',
          backgroundColor: sourceStation && destinationStation ? '#0066CC' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: sourceStation && destinationStation ? 'pointer' : 'not-allowed',
          width: '100%'
        }}
      >
        Get Route Information
      </button>

      {sourceStation && destinationStation && (
        <div style={{ 
          marginTop: '10px', 
          padding: '8px', 
          backgroundColor: '#f0f8ff', 
          borderRadius: '3px',
          fontSize: '10px'
        }}>
          <div><strong>Source:</strong> {sourceStation.name} ({sourceStation.line})</div>
          <div><strong>Destination:</strong> {destinationStation.name} ({destinationStation.line})</div>
        </div>
      )}
    </div>
  );
}

function MumbaiMap() {
  const [selectedTileStyle, setSelectedTileStyle] = React.useState('cartoVoyagerNoLabels');
  const [sourceStation, setSourceStation] = useState(null);
  const [destinationStation, setDestinationStation] = useState(null);
  const [selectionMode, setSelectionMode] = useState(null); // 'source' or 'destination'
  const [routePath, setRoutePath] = useState([]); // array of station objects in order
  const [interchanges, setInterchanges] = useState([]); // array of {atStation, fromLine, toLine}

  // Combine all stations from all lines
  const allStations = transitLines.flatMap(l => l.stations);

  const isInRoute = (station) => {
    if (!routePath.length) return true;
    return routePath.some(s => s.id === station.id && s.line === station.line);
  };

  // Graph logic moved to utils/graph

  // Function to handle station click for selection
  const handleStationClick = (station) => {
    console.log('Station clicked:', station.name, 'Selection mode:', selectionMode);
    
    if (selectionMode === 'source') {
      setSourceStation(station);
      setSelectionMode(null);
      console.log('Source station set:', station.name);
    } else if (selectionMode === 'destination') {
      setDestinationStation(station);
      setSelectionMode(null);
      console.log('Destination station set:', station.name);
    } else {
      console.log('No selection mode active. Click "Select Source" or "Select Destination" first.');
    }
  };

  // Compute and set route between two stations
  const computeAndSetRoute = (fromStation, toStation) => {
    if (!fromStation || !toStation) return;
    const result = runDijkstra(fromStation, toStation);
    if (result.stations.length === 0) {
      alert('No route found between selected stations.');
      setRoutePath([]);
      setInterchanges([]);
      return;
    }

    setRoutePath(result.stations);
    setInterchanges(result.interchanges);

    let summary = `Route from ${fromStation.name} to ${toStation.name}\n`;
    summary += `Total time: ${result.totalTime} minutes\n`;
    if (result.interchanges.length > 0) {
      summary += `Interchanges (${result.interchanges.length}):\n`;
      result.interchanges.forEach((chg, idx) => {
        summary += `${idx + 1}. At ${chg.atStation}: ${chg.fromLine} -> ${chg.toLine}\n`;
      });
    }
    alert(summary);
  };

  // Backwards compatibility button (unused after popup buttons)
  const handleGetRoute = () => {
    computeAndSetRoute(sourceStation, destinationStation);
  };

  const clearRoute = () => {
    setRoutePath([]);
    setInterchanges([]);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Map Title */}
      <div className="map-title">
        Mumbai Transit Map
      </div>
      
      {/* Map Controls */}
      <div className="map-controls">
        <div>
          <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
            Map Style:
          </div>
          <select 
            value={selectedTileStyle} 
            onChange={(e) => setSelectedTileStyle(e.target.value)}
            style={{ 
              fontSize: '11px', 
              padding: '2px 4px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              width: '100%'
            }}
          >
            <option value="cartoVoyagerNoLabels">Colored (No Labels)</option>
            <option value="cartoLightNoLabels">Light (No Labels)</option>
            <option value="cartoLight">Light with Labels</option>
            <option value="cartoDark">Dark Theme</option>
            <option value="stamenToner">Minimal Black & White</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={clearRoute}
            style={{
              fontSize: '10px',
              padding: '4px 8px',
              backgroundColor: '#f44336',
              color: 'white',
              border: '1px solid #c62828',
              borderRadius: '3px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Clear Route
          </button>
        </div>
      </div>

      {/* Transit Legend */}
      <div className="metro-legend">
        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>
          Mumbai Transit
        </div>
        {transitLines.map((line) => (
          <div className="metro-legend-item" key={line.label}>
            <div 
              className="metro-legend-color" 
              style={{ backgroundColor: line.color }}
            ></div>
            <span>{line.label}</span>
          </div>
        ))}
      </div>

      {/* Leaflet Map */}
      <MapContainer
        center={[19.0760, 72.8777]} // Mumbai city center
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution={mapTileOptions[selectedTileStyle].attribution}
          url={mapTileOptions[selectedTileStyle].url}
        />
        
        {/* Lines: only show when no route, or show only segments along route */}
        {!routePath.length && (
          <>
            {transitLineCoordinates.map((line, idx) => (
              <MetroLineWithDecorators
                key={`line-${idx}`}
                coordinates={line.coordinates}
                color={line.color}
              />
            ))}
          </>
        )}
        {routePath.length > 1 && (
          (() => {
            const segments = [];
            const getColorForLine = (label) => {
              const found = transitLines.find(l => l.label === label);
              return found ? found.color : '#000000';
            };
            for (let i = 1; i < routePath.length; i += 1) {
              const prev = routePath[i - 1];
              const curr = routePath[i];
              const color = getColorForLine(prev.line);
              segments.push({ coords: [prev.coordinates, curr.coordinates], color });
            }
            return segments.map((seg, idx) => (
              <Polyline key={`route-seg-${idx}`} positions={seg.coords} pathOptions={{ color: seg.color, weight: 6, opacity: 0.95 }} />
            ));
          })()
        )}
        
        {/* Transit Stations (rendered for all lines) */}
        {transitLines.map((line, idx) => (
          <MetroStations
            key={`stations-${idx}`}
            stations={line.stations}
            color={line.color}
            normalIcon={createMetroIcon(line.color)}
            terminalIcon={createMetroIcon(line.color, true)}
            sourceStation={sourceStation}
            destinationStation={destinationStation}
            routePath={routePath}
            selectionMode={selectionMode}
            setSourceStation={setSourceStation}
            setDestinationStation={setDestinationStation}
            computeAndSetRoute={computeAndSetRoute}
            handleStationClick={handleStationClick}
          />
        ))}





        <MapController />
      </MapContainer>
    </div>
  );
}

export default MumbaiMap;

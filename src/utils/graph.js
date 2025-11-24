// Graph utilities for metro routing
import { transitLines } from '../data/linesData';

// Build a graph of stations with default weights and defined interchanges
export const buildGraph = () => {
  // Node id scheme: `${line}-${id}` ensures uniqueness across lines
  const nodeId = (station) => `${station.line}-${station.id}`;

  // Combine all stations from all lines
  const allStations = transitLines.flatMap(l => l.stations);

  const adjacency = new Map(); // nodeId -> Array<{ toId, weight }>
  const idToStation = new Map();

  const addNode = (station) => {
    const id = nodeId(station);
    if (!adjacency.has(id)) adjacency.set(id, []);
    idToStation.set(id, station);
    return id;
  };

  const addUndirectedEdge = (fromId, toId, weight) => {
    adjacency.get(fromId).push({ toId, weight });
    adjacency.get(toId).push({ toId: fromId, weight });
  };

  const addLineEdges = (stations) => {
    for (let i = 0; i < stations.length; i += 1) {
      const currentId = addNode(stations[i]);
      if (i < stations.length - 1) {
        const nextId = addNode(stations[i + 1]);
        // Only connect stations that are on the same line (prevents connecting branches incorrectly)
        if (stations[i].line === stations[i + 1].line) {
          addUndirectedEdge(currentId, nextId, 5);
        }
      }
    }
  };

  // Add all lines generically
  for (const line of transitLines) {
    addLineEdges(line.stations);
  }

  //addUndirectedEdge('Blue Line-5', 'Yellow Line-5', 5);

  // Helper: find station id by name and line label
  const findByNameAndLine = (name, lineLabel) => {
    const station = allStations.find(
      (s) => s.name.toLowerCase() === name.toLowerCase() && s.line === lineLabel
    );
    return station ? nodeId(station) : null;
  };

  // Explicit interchanges (weight 5)
  const dnNagarId = findByNameAndLine('D.N. Nagar', 'Blue Line');
  const andheriWestId = findByNameAndLine('Andheri West', 'Yellow Line');
  if (dnNagarId && andheriWestId) addUndirectedEdge(dnNagarId, andheriWestId, 5);

  const gundavaliId = findByNameAndLine('Gundavali', 'Red Line');
  const wehId = findByNameAndLine('Western Express Highway', 'Blue Line');
  if (gundavaliId && wehId) addUndirectedEdge(gundavaliId, wehId, 5);

  const dahisarRedId = findByNameAndLine('Dahisar (East)', 'Red Line');
  const dahisarYellowId = findByNameAndLine('Dahisar (East)', 'Yellow Line');
  if (dahisarRedId && dahisarYellowId) addUndirectedEdge(dahisarRedId, dahisarYellowId, 5);

  const marolBlueId = findByNameAndLine('Marol Naka', 'Blue Line');
  const marolAquaId = findByNameAndLine('Marol Naka', 'Aqua Line');
  if (marolBlueId && marolAquaId) addUndirectedEdge(marolBlueId, marolAquaId, 5);

  const GhatkoparCentralLineId = findByNameAndLine('Ghatkopar', 'Central Line');
  const GhatkoparBlueLineId = findByNameAndLine('Ghatkopar', 'Blue Line');
  if (GhatkoparCentralLineId && GhatkoparBlueLineId) addUndirectedEdge(GhatkoparCentralLineId, GhatkoparBlueLineId, 5);

  const AndheriWesternLineId = findByNameAndLine('Andheri', 'Western Line');
  const AndheriBlueLineId = findByNameAndLine('Andheri', 'Blue Line');
  if (AndheriWesternLineId && AndheriBlueLineId) addUndirectedEdge(AndheriWesternLineId, AndheriBlueLineId, 5);

  const DadarCentralLineId = findByNameAndLine('Dadar', 'Central Line');
  const DadarWesternLineId = findByNameAndLine('Dadar', 'Western Line');
  if (DadarCentralLineId && DadarWesternLineId) addUndirectedEdge(DadarCentralLineId, DadarWesternLineId, 5);

  const ParelCentralLineId = findByNameAndLine('Parel', 'Central Line');
  const PrabhadeviWesternLineId = findByNameAndLine('Prabhadevi', 'Western Line');
  if (ParelCentralLineId && PrabhadeviWesternLineId) addUndirectedEdge(ParelCentralLineId, PrabhadeviWesternLineId, 5);

  const lowerParelWesternLineId = findByNameAndLine('Lower Parel', 'Western Line');
  const curreyRoadCentralLineId = findByNameAndLine('Currey Road', 'Central Line');
  const lowerParelMonorailId = findByNameAndLine('Lower Parel Monorail', 'Mumbai Monorail');

  if (lowerParelWesternLineId && curreyRoadCentralLineId) addUndirectedEdge(lowerParelWesternLineId, curreyRoadCentralLineId, 7);
  if (lowerParelMonorailId && curreyRoadCentralLineId) addUndirectedEdge(lowerParelMonorailId, curreyRoadCentralLineId, 5);
  if (lowerParelMonorailId && lowerParelWesternLineId) addUndirectedEdge(lowerParelMonorailId, lowerParelWesternLineId, 8);

  const WadalaRoadHarbourLineId = findByNameAndLine('Wadala Road', 'Harbour Line');
  const WadalaBridgeHarbourLineId = findByNameAndLine('Wadala Bridge', 'Mumbai Monorail');
  if (WadalaRoadHarbourLineId && WadalaBridgeHarbourLineId) addUndirectedEdge(WadalaRoadHarbourLineId, WadalaBridgeHarbourLineId, 5);

  

  
  

  // Auto-detect interchanges by station name across different lines
  const nameToNodeIds = new Map();
  for (const station of allStations) {
    const key = station.name.toLowerCase();
    const id = nodeId(station);
    if (!nameToNodeIds.has(key)) nameToNodeIds.set(key, []);
    nameToNodeIds.get(key).push(id);
  }

  // For any name appearing on 2+ lines, connect those nodes as interchanges
  // Special handling for Central Line branches at Kalyan Junction
  for (const [stationName, ids] of nameToNodeIds.entries()) {
    if (ids.length >= 2) {
      // Special case: Kalyan Junction - branches should only connect to main line, not to each other
      if (stationName === 'kalyan junction') {
        const mainLineId = ids.find(id => {
          const station = idToStation.get(id);
          return station && station.line === 'Central Line';
        });
        const karjatBranchId = ids.find(id => {
          const station = idToStation.get(id);
          return station && station.line === 'Central Line (Karjat Branch)';
        });
        const kasaraBranchId = ids.find(id => {
          const station = idToStation.get(id);
          return station && station.line === 'Central Line (Kasara Branch)';
        });
        
        // Connect main line to each branch, but not branches to each other
        if (mainLineId) {
          if (karjatBranchId) {
            addUndirectedEdge(mainLineId, karjatBranchId, 5);
          }
          if (kasaraBranchId) {
            addUndirectedEdge(mainLineId, kasaraBranchId, 5);
          }
        } else {
          // Fallback: if main line not found, connect normally (shouldn't happen, but safety)
          for (let i = 0; i < ids.length; i += 1) {
            for (let j = i + 1; j < ids.length; j += 1) {
              addUndirectedEdge(ids[i], ids[j], 5);
            }
          }
        }
      } else {
        // For all other stations, connect all pairs (normal interchange behavior)
        for (let i = 0; i < ids.length; i += 1) {
          for (let j = i + 1; j < ids.length; j += 1) {
            addUndirectedEdge(ids[i], ids[j], 5);
          }
        }
      }
    }
  }

  return { adjacency, idToStation, nodeId };
};

// Dijkstra shortest-path based on minutes weight
export const runDijkstra = (startStation, endStation) => {
  const { adjacency, idToStation, nodeId } = buildGraph();
  const allStations = transitLines.flatMap(l => l.stations);
  
  const startId = nodeId(startStation);
  const endId = nodeId(endStation);

  // Check if stations exist in the graph
  if (!adjacency.has(startId)) {
    console.error('Start station not found in graph:', startId, startStation);
    return { stations: [], totalTime: null, interchanges: [] };
  }
  if (!adjacency.has(endId)) {
    console.error('End station not found in graph:', endId, endStation);
    return { stations: [], totalTime: null, interchanges: [] };
  }
  
  // If start and end are the same
  if (startId === endId) {
    return { stations: [startStation], totalTime: 0, interchanges: [] };
  }

  const distances = new Map();
  const previous = new Map();
  const visited = new Set();

  // Initialize
  adjacency.forEach((_, id) => {
    distances.set(id, Infinity);
    previous.set(id, null);
  });
  distances.set(startId, 0);

  // Simple priority queue using array (OK for small graphs)
  const queue = [{ id: startId, dist: 0 }];

  while (queue.length > 0) {
    // Extract min
    queue.sort((a, b) => a.dist - b.dist);
    const { id: currentId } = queue.shift();
    if (visited.has(currentId)) continue;
    visited.add(currentId);
    if (currentId === endId) break;

    const currentStation = idToStation.get(currentId);
    const neighbors = adjacency.get(currentId) || [];
    
    for (const { toId, weight } of neighbors) {
      if (visited.has(toId)) continue;
      
      const nextStation = idToStation.get(toId);
      const isLineChange = currentStation && nextStation && currentStation.line !== nextStation.line;
      const isSameName = currentStation && nextStation && currentStation.name.toLowerCase() === nextStation.name.toLowerCase();
      
      // Prefer interchanges (line changes at same station name) by giving them a small bonus
      // This encourages changing lines at the earliest possible shared station
      let adjustedWeight = weight;
      if (isLineChange && isSameName) {
        // Small bonus for interchanges (subtract 0.1 to prefer them)
        adjustedWeight = weight - 0.1;
      } else if (!isLineChange && currentStation && nextStation) {
        // Small penalty for continuing on same line when we could interchange
        // Check if current station has an interchange option (same name on different line)
        const hasInterchangeOption = allStations.some(s => 
          s.name.toLowerCase() === currentStation.name.toLowerCase() && 
          s.line !== currentStation.line
        );
        if (hasInterchangeOption) {
          // Add small penalty to prefer changing earlier
          adjustedWeight = weight + 0.1;
        }
      }
      
      const alt = distances.get(currentId) + adjustedWeight;
      if (alt < distances.get(toId)) {
        distances.set(toId, alt);
        previous.set(toId, currentId);
        queue.push({ id: toId, dist: alt });
      }
    }
  }

  // Reconstruct path
  const pathIds = [];
  let crawl = endId;
  if (!previous.get(crawl) && crawl !== startId) {
    return { stations: [], totalTime: null, interchanges: [] };
  }
  while (crawl) {
    pathIds.unshift(crawl);
    const prev = previous.get(crawl);
    if (!prev) break;
    crawl = prev;
  }

  const pathStations = pathIds.map((id) => idToStation.get(id)).filter(s => s); // Filter out any undefined stations

  // Debug: Log path for Kalyan branch switching
  const hasKalyanInPath = pathStations.some(s => s && s.name === 'Kalyan Junction');
  if (hasKalyanInPath) {
    console.log('Path through Kalyan:', pathStations.map(s => `${s.name} (${s.line})`).join(' → '));
  }

  // Detect interchanges (line changes between consecutive stations)
  const interchangeList = [];
  for (let i = 1; i < pathStations.length; i += 1) {
    const prev = pathStations[i - 1];
    const curr = pathStations[i];
    if (prev && curr && prev.line !== curr.line) {
      // Determine the station name for the interchange
      // If current station is Kalyan Junction, use it; otherwise use previous station name
      const interchangeStation = curr.name === 'Kalyan Junction' ? curr.name : 
                                 prev.name === 'Kalyan Junction' ? prev.name : 
                                 curr.name;
      
      interchangeList.push({ 
        atStation: interchangeStation, 
        fromLine: prev.line, 
        toLine: curr.line 
      });
    }
  }
  
  if (hasKalyanInPath && interchangeList.length > 0) {
    console.log('Interchanges detected:', interchangeList);
  }

  const totalTime = pathStations.length > 1 ? (pathStations.length - 1) * 5 : 0;
  return { stations: pathStations, totalTime, interchanges: interchangeList };
};

export default {
  buildGraph,
  runDijkstra,
};



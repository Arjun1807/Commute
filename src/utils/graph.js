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
        addUndirectedEdge(currentId, nextId, 5);
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

  // Auto-detect interchanges by station name across different lines
  const nameToNodeIds = new Map();
  for (const station of allStations) {
    const key = station.name.toLowerCase();
    const id = nodeId(station);
    if (!nameToNodeIds.has(key)) nameToNodeIds.set(key, []);
    nameToNodeIds.get(key).push(id);
  }

  // For any name appearing on 2+ lines, connect those nodes as interchanges
  for (const ids of nameToNodeIds.values()) {
    if (ids.length >= 2) {
      for (let i = 0; i < ids.length; i += 1) {
        for (let j = i + 1; j < ids.length; j += 1) {
          addUndirectedEdge(ids[i], ids[j], 5);
        }
      }
    }
  }

  return { adjacency, idToStation, nodeId };
};

// Dijkstra shortest-path based on minutes weight
export const runDijkstra = (startStation, endStation) => {
  const { adjacency, idToStation, nodeId } = buildGraph();
  const startId = nodeId(startStation);
  const endId = nodeId(endStation);

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

    const neighbors = adjacency.get(currentId) || [];
    for (const { toId, weight } of neighbors) {
      if (visited.has(toId)) continue;
      const alt = distances.get(currentId) + weight;
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

  const pathStations = pathIds.map((id) => idToStation.get(id));

  // Detect interchanges (line changes between consecutive stations)
  const interchangeList = [];
  for (let i = 1; i < pathStations.length; i += 1) {
    const prev = pathStations[i - 1];
    const curr = pathStations[i];
    if (prev.line !== curr.line) {
      interchangeList.push({ atStation: curr.name, fromLine: prev.line, toLine: curr.line });
    }
  }

  const totalTime = pathStations.length > 1 ? (pathStations.length - 1) * 5 : 0;
  return { stations: pathStations, totalTime, interchanges: interchangeList };
};

export default {
  buildGraph,
  runDijkstra,
};



# Mumbai Transport Map

An interactive map showcasing Mumbai's metro, local train, and monorail systems built with React and Leaflet.

## Features

- Interactive map centered on Mumbai
- Support for multiple transport systems:
  - Mumbai Metro
  - Local Trains (Western, Central, Harbour lines)
  - Mumbai Monorail
- Real-time updates and station information
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- React 18
- Leaflet (mapping library)
- React-Leaflet (React wrapper for Leaflet)
- OpenStreetMap tiles

## Project Structure

```
src/
├── components/
│   └── MumbaiMap.js    # Main map component
├── App.js              # Main app component
├── App.css             # App styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## Development

The project is set up with Create React App, so you can use all the standard npm scripts:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## Contributing

This is a work in progress. More transport lines and features will be added incrementally.

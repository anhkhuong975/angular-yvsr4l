# angular-yvsr4l

An Angular application built with [StackBlitz](https://stackblitz.com) that displays interactive line charts with zoom and pan capabilities.

## Features

- Interactive line chart powered by [Chart.js](https://www.chartjs.org/) and [ng2-charts](https://valor-software.com/ng2-charts/)
- Zoom and pan support via [chartjs-plugin-zoom](https://github.com/chartjs/chartjs-plugin-zoom)
- Stacked y-axis with percentage formatting
- Multiple datasets with a toggleable legend

## Prerequisites

- [Node.js](https://nodejs.org/) (v10 or higher)
- [Angular CLI](https://angular.io/cli) v7

## Installation

```bash
npm install
```

## Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

## Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

```bash
npm test
```

## Technologies Used

- [Angular](https://angular.io/) 8.x
- [Chart.js](https://www.chartjs.org/) 2.x
- [ng2-charts](https://valor-software.com/ng2-charts/) 2.x
- [chartjs-plugin-zoom](https://github.com/chartjs/chartjs-plugin-zoom) for zoom/pan interactions

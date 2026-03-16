# angular-yvsr4l

An Angular application featuring interactive line charts with zoom and pan functionality, built with Chart.js and ng2-charts.

## Features

- Interactive line charts powered by [Chart.js](https://www.chartjs.org/) and [ng2-charts](https://valor-software.com/ng2-charts/)
- Zoom and pan support via [chartjs-plugin-zoom](https://github.com/chartjs/chartjs-plugin-zoom)
- Stacked y-axis with percentage labels
- Responsive layout

## Tech Stack

- **Angular** 8.x
- **Chart.js** 2.x
- **ng2-charts** 2.x
- **chartjs-plugin-zoom** 0.7.x

## Getting Started

### Prerequisites

- Node.js (v10+)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload on source file changes.

### Build

```bash
npm run build
```

Build artifacts are output to the `dist/` directory. Use `--prod` for a production build.

### Running Tests

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts    # Main component with chart configuration
│   ├── app.component.html  # Chart template
│   ├── app.component.css   # Component styles
│   └── app.module.ts       # App module
├── index.html
├── main.ts
├── polyfills.ts
└── styles.css
```

## License

MIT

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import 'chartjs-plugin-zoom';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];

  lineChartOptions: ChartOptions = {
    legend: {
      reverse: true,
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            // min: 0,
            // max: 100,
            callback: (value) => {
              return `${+value} %`;
            },
          },
        },
      ],
    },
    pan: {
      enabled: true,
      mode: 'x',
    },
    zoom: {
      enabled: true,
      mode: 'x',
      speed: 1.5,
    },
  };

  lineChartColors: Color[] = [];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit() {
    this.lineChartData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'First' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Second' },
      { data: [22, 44, 23, 69, 82, 47, 50], label: 'Third' },
    ];

    this.lineChartLabels = [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
    ];
  }
}

import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import chartJs from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('barCanvas') barCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    @ViewChild('pieCanvas') pieCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;

    barChart: any;
    lineChart: any;
    pieChart: any;
    doughnutChart : any;

  constructor(public navCtrl: NavController) { }

  ngAfterViewInit(){
    setTimeout(() => {
      this.barChart = this.getBarChart();
      this.lineChart = this.getLineChart();
    }, 150)
    setTimeout(() => {
      this.pieChart = this.getPieChart();
      this.doughnutChart = this.getDoughnutChart();
    }, 250)
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }


  getBarChart(){
    const data = {
      labels: ['Vermelho', 'Azul', 'Amarelo', 'Verde', 'Roxo'],
      datasets: [{
        label: 'número de votos',
        data: [12, 23, 15, 90, 5],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(20, 0, 255)',
          'rgb(255, 230, 0)',
          'rgb(0, 255, 10)',
          'rgb(60, 0, 70)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

  getLineChart(){
    const data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
      datasets: [{
        label: 'Meu Dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(0, 178, 255)',
        borderColor: 'rgb(231, 205, 35)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[20, 15, 98, 4],
        scanGaps: false,
      }, {
        label: 'Meu segundo Dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(117, 0, 49)',
        borderColor: 'rgb(51, 50, 46)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[29, 135, 13, 70],
        scanGaps: false,
      }
    ]
    }

    return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  }

  getPieChart(){
    const data = {
      labels: ['Vermelho', 'Azul', 'Amarelo'],
      datasets: [{
        data: [300, 75, 224],
        backgroundColor: ['rgb(200, 6, 0)', 'rgb(36, 0, 255)', 'rgb(242, 255, 0)']
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  getDoughnutChart(){
    const data = {
      labels: ['Vermelho', 'Azul', 'Amarelo'],
      datasets: [{
        label: 'Teste Chart',
        data: [12, 65, 32],
        backgroundColor: [
          'rgb(0, 244, 97)',
          'rgb(37, 39, 43)',
          'rgb(255, 207, 0)'
        ]
      }]
    }

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }








}

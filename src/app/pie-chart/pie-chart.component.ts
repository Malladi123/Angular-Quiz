import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

   // Pie

  public pieChartLabels:string[] = ['Incorrect','Correct'];
  
  @Input()
  pieChartData:number[] = [2,3];
  public pieChartType:string = 'pie';

  constructor() { }

  ngOnInit() {
  }

}

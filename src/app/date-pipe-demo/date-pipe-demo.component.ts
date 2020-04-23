import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe-demo',
 template:`
 <h2>Date Pipe Example</h2>
  <h4>1. Today is {{today}}</h4>
  <h4>2. Today is {{today | date }}</h4>
  <h4>3. Today is {{today | date:"dd/MM/yyyy"}}</h4>
 `,
  styleUrls: ['./date-pipe-demo.component.css']
})
export class DatePipeDemoComponent implements OnInit {
today=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

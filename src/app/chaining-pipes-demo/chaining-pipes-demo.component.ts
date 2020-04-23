import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes-demo',
  template:`
  <h2>Chaining Pipes Example</h2>
  <h4>{{birthday | date | uppercase}}</h4>
  `,
  styleUrls: ['./chaining-pipes-demo.component.css']
})
export class ChainingPipesDemoComponent implements OnInit {
  birthday=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

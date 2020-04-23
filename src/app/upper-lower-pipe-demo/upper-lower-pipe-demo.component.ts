import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-lower-pipe-demo',
 template:`
  <h2>Lower and Upper case pipe Example</h2>
  <p>In lowerCase:{{mystr | lowercase}}</p>
  <p>In upperCase:{{mystr | uppercase}}</p>
 `,
  styleUrls: ['./upper-lower-pipe-demo.component.css']
})
export class UpperLowerPipeDemoComponent implements OnInit {
  mystr:string='Hello World.!';
  constructor() { }

  ngOnInit(): void {
  }

}

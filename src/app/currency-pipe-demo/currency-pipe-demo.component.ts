import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe-demo',
 template:`
  <h2>Cuurency Pipe Example</h2>
  <p>A in INR: {{a | currency:'INR':true}}</p>
  <p>B in USD: {{b | currency:'USD':false}}</p>
 `,
  styleUrls: ['./currency-pipe-demo.component.css']
})
export class CurrencyPipeDemoComponent implements OnInit {
a:number=100;
b:number=25;
  constructor() { }

  ngOnInit(): void {
  }

}

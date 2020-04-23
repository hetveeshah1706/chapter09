import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe-demo',
  template:`
  <h2>JSON Pipe Example</h2>
  <h4>Without JSON Pipe.</h4>{{obj}}
  <h4>With JSON Pipe.</h4>{{obj | json}}
  `,
  styleUrls: ['./json-pipe-demo.component.css']
})
export class JsonPipeDemoComponent implements OnInit {
  obj:Object={name:{fname:'Jinal',lName:'shah'},Country:'India'}
  constructor() { }

  ngOnInit(): void {
  }

}

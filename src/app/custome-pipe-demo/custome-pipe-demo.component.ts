import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-pipe-demo',
  templateUrl: './custome-pipe-demo.component.html',
  styleUrls: ['./custome-pipe-demo.component.css']
})
export class CustomePipeDemoComponent implements OnInit {
  name:string="John";
  constructor() { }

  ngOnInit(): void {
  }

}

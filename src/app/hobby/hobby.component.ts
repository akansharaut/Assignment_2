import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit{
  constructor() { }

  ngOnInit(){}

  data: any;

  onEnter(value: string) { 
    this.data = value; 
  }
}

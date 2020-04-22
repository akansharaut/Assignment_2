import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }
  
  onStart() {
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  onReset() {
    clearInterval(this.interval);
    this.counter = 0;
  }
}

import { Component, OnChanges,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hobby-child',
  templateUrl: './hobby-child.component.html',
  styleUrls: ['./hobby-child.component.scss']
})
export class HobbyChildComponent implements OnChanges {
  @Input() data : any;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log("Current Value=" + cur);  
      console.log("Previous Value="+ prev);
    }
  }

}

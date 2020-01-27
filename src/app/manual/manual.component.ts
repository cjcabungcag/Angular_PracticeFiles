import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<h1>Manual Component works!</h1>',
  styles: ['h1 { font-weight: bold; color: blue; } ']
})
export class ManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}

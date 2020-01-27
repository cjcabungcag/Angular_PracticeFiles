import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-msg2',
  templateUrl: './msg2.component.html',
  styleUrls: ['./msg2.component.css']
})
export class Msg2Component implements OnInit {
  constructor() { }

  @Input()
  parentData:string;


  @Output()
  childEvent= new EventEmitter();
  public cdata:string;

  onchange(){
    this.childEvent.emit(this.cdata);
    this.cdata = "";
  }

  ngOnInit() {
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../object'

@Component({
  selector: 'app-enroll2',
  templateUrl: './enroll2.component.html',
  styleUrls: ['./enroll2.component.css']
})
export class Enroll2Component implements OnInit {
  approvedList:any[] =[]
  declinedList:any[] =[]  
  constructor() { }

  ngOnInit() {
  }

  @Input() data: Data;
  
  @Output()
  childEvent= new EventEmitter();

  @Output()
  childEvent1= new EventEmitter();
  public cdata:string;

  approve(){
    this.cdata =  'Enrolment is approved!';
    this.childEvent.emit(this.cdata)
    this.approvedList.push(this.data);
  }

  decline(){
    this.cdata =  'Enrolment is declined!';
    this.childEvent.emit(this.cdata);
    
    this.declinedList.push(this.data);
    this.childEvent1.emit(this.declinedList);
  }

}

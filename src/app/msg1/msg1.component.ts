import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg1',
  templateUrl: './msg1.component.html',
  styleUrls: ['./msg1.component.css']
})
export class Msg1Component implements OnInit {
  public message:string;
  public pdata:string;
  public cdata:string;

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.pdata = this.message;
    this.message = "";
  }

}


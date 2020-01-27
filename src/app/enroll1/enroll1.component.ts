import { Component, OnInit, ContentChild } from '@angular/core';
import { Data } from '../object'

@Component({
  selector: 'app-enroll1',
  templateUrl: './enroll1.component.html',
  styleUrls: ['./enroll1.component.css']
})
export class Enroll1Component implements OnInit {
  public name:string;
  public gender:string;
  public address:string;
  public contact:string;
  public cdata:string;
  
  public data:Data={
    name: this.name,
    gender: this.gender,
    address: this.address,
    contact: this.contact
  }

  constructor() { }
  ngOnInit() {
  }

  enroll(){
    this.data.name= this.name;
    this.data.gender= this.gender;
    this.data.address= this.address;

    if(this.contact){
      this.data.contact = "Yes"
    }else{
      this.data.contact= "No"
    }
  }

}

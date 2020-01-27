import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
  fullname:string;
  emailAdd:string;
  gender:string;

  newfullname:string;
  newemailAdd:string;
  newgender:string;

  
  hide:boolean=false;



  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.hide = !this.hide  
    this.newfullname = this.fullname;
    this.newemailAdd = this.emailAdd
    this.newgender = this.gender
  }

 
}

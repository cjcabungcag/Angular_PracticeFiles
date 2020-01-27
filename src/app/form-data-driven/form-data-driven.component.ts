import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data-driven',
  templateUrl: './form-data-driven.component.html',
  styleUrls: ['./form-data-driven.component.css']
})
export class FormDataDrivenComponent implements OnInit {
  data:string;

  ngOnInit() {
  }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',  Validators.required],
    emailAdd: ['', [Validators.required, Validators.email]],
    street: ['',  Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['',  Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.data = JSON.stringify(this.profileForm.value);
  }

}

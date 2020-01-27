import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualComponent } from './manual/manual.component';

import { Activity3Component } from './activity3/activity3.component';

import { Msg1Component } from './msg1/msg1.component';
import { Msg2Component } from './msg2/msg2.component';

import { Enroll1Component } from './enroll1/enroll1.component';
import { Enroll2Component } from './enroll2/enroll2.component';

import { FormDataDrivenComponent } from './form-data-driven/form-data-driven.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManualComponent,
    Activity3Component,
    Msg1Component,
    Msg2Component,
    Enroll1Component,
    Enroll2Component,
    FormDataDrivenComponent,
    FormTemplateDrivenComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

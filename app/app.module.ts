import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MdCardModule } from '@angular2-material/card';

import { AppComponent }  from './app.component';
import {routing} from './app.routing';


import {ParticipantComponent} from './app.participant';
import {PhoneLogComponent} from './app.phone_log';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing, MdCardModule.forRoot() ],
  providers: [

  ],
  declarations: [ AppComponent, ParticipantComponent, PhoneLogComponent ],
  bootstrap: [  AppComponent]
})
export class AppModule { }

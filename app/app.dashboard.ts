import {Component} from '@angular/core';
import { Routes, RouterModule, RouterConfig } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: 'app/app.dashboard.html',
  directives:[]
})
export class DashComponent {
  tabs = [{name:'Home', url:'/'},{name:'Participant Profile', url:'/profiles'},{name:'Phone Log', url:'/phone'}, {name:'Screening', url:'/'},
  {name:'Tasks', url:'/'},{name:'Questionnaire Check-in', url:'/'}, {name:'Payments', url:'/'},{name:'Reports', url:'/'}];
}
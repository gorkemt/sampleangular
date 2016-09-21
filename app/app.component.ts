import { Component } from '@angular/core';
import { DashComponent } from './app.dashboard';
import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: `<app-dash></app-dash><router-outlet></router-outlet>`,
    directives:[DashComponent]
})
export class AppComponent { }

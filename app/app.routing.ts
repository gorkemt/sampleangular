import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';

import { PhoneLogComponent }  from './app.phone_log';
import { ParticipantComponent }    from './app.participant';
import {MainPageComponent} from './app.main_page';
import {ParticipantProfileListComponent} from './app.participant_profile_list';

const appRoutes: Routes = [
    {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
    {path:'main',component:MainPageComponent},
    {path:'profile/:id', component:ParticipantComponent  },
    {path:'profiles', component:ParticipantProfileListComponent },
    {path:'phone', component:PhoneLogComponent},
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
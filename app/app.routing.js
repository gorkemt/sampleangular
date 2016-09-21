"use strict";
var router_1 = require('@angular/router');
var app_phone_log_1 = require('./app.phone_log');
var app_participant_1 = require('./app.participant');
var app_main_page_1 = require('./app.main_page');
var app_participant_profile_list_1 = require('./app.participant_profile_list');
var appRoutes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    { path: 'main', component: app_main_page_1.MainPageComponent },
    { path: 'profile/:id', component: app_participant_1.ParticipantComponent },
    { path: 'profiles', component: app_participant_profile_list_1.ParticipantProfileListComponent },
    { path: 'phone', component: app_phone_log_1.PhoneLogComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
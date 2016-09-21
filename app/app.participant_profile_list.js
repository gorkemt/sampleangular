"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_participant_profile_search_1 = require('./app.participant_profile_search');
var app_participant_service_1 = require('./app.participant_service');
var ParticipantProfileListComponent = (function () {
    function ParticipantProfileListComponent(service) {
        this.service = service;
        this.participant_service = service;
        this.list = service.get_all(); //.subscribe(profile=>this.profiles=profile);
    }
    ParticipantProfileListComponent.prototype.onNotify = function (e) {
        console.log(e);
        var all_undefined = true;
        for (var p in e) {
            console.log(p);
            if (e.hasOwnProperty(p) && (e[p] != undefined && e[p] != "")) {
                all_undefined = false;
                console.log('all_undefined: ' + all_undefined);
            }
            else {
                delete e[p];
            }
        }
        if (all_undefined) {
            this.list = this.participant_service.get_all();
        }
        else {
            console.log(e);
            this.list = this.list.filter(function (x) {
                if (e.participant_id && e.screening_id) {
                    return x.participant_id == e.participant_id && x.screening_id == e.screening_id;
                }
                else if (e.participant_id) {
                    return x.participant_id == e.participant_id;
                }
            });
        }
    };
    ParticipantProfileListComponent.prototype.filter_items = function (item) {
    };
    ParticipantProfileListComponent = __decorate([
        core_1.Component({
            selector: 'participant-profile_list',
            templateUrl: 'app/app.participant_profile_list.html',
            styleUrls: [],
            directives: [app_participant_profile_search_1.ParticipantSearchComponent],
            providers: [app_participant_service_1.ParticipantService]
        }), 
        __metadata('design:paramtypes', [app_participant_service_1.ParticipantService])
    ], ParticipantProfileListComponent);
    return ParticipantProfileListComponent;
}());
exports.ParticipantProfileListComponent = ParticipantProfileListComponent;
//# sourceMappingURL=app.participant_profile_list.js.map
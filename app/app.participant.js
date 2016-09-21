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
var app_participant_progress_1 = require('./app.participant_progress');
var app_participant_screening_1 = require('./app.participant_screening');
var app_participant_profile_1 = require('./app.participant_profile');
var ParticipantComponent = (function () {
    function ParticipantComponent() {
    }
    ParticipantComponent = __decorate([
        core_1.Component({
            selector: 'participant',
            templateUrl: 'app/app.participant.html',
            styleUrls: [],
            directives: [app_participant_progress_1.ParticipantProgressComponent, app_participant_screening_1.ParticipantScreeningComponent, app_participant_profile_1.ParticipantProfileComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ParticipantComponent);
    return ParticipantComponent;
}());
exports.ParticipantComponent = ParticipantComponent;
//# sourceMappingURL=app.participant.js.map
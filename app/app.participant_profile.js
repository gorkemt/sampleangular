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
var app_phone_log_1 = require('./app.phone_log');
var app_participant_service_1 = require('./app.participant_service');
var app_dropx_1 = require('./app.dropx');
var router_1 = require('@angular/router');
var ParticipantProfileComponent = (function () {
    function ParticipantProfileComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ParticipantProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.participant = _this.service
                .get_by_participant_id(id);
        });
    };
    ParticipantProfileComponent = __decorate([
        core_1.Component({
            selector: 'participant-profile',
            templateUrl: 'app/app.participant_profile.html',
            styleUrls: [],
            directives: [app_participant_progress_1.ParticipantProgressComponent, app_participant_screening_1.ParticipantScreeningComponent, app_phone_log_1.PhoneLogComponent, app_dropx_1.DropX],
            providers: [app_participant_service_1.ParticipantService]
        }), 
        __metadata('design:paramtypes', [app_participant_service_1.ParticipantService, router_1.ActivatedRoute])
    ], ParticipantProfileComponent);
    return ParticipantProfileComponent;
}());
exports.ParticipantProfileComponent = ParticipantProfileComponent;
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var Participant = (function () {
    function Participant() {
        this.address = new Address();
        if (!this.notes)
            this.notes = new Array();
        if (!this.phone_logs)
            this.phone_logs = new Array();
    }
    return Participant;
}());
exports.Participant = Participant;
//# sourceMappingURL=app.participant_profile.js.map
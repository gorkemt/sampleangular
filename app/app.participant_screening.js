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
var ParticipantScreeningComponent = (function () {
    function ParticipantScreeningComponent() {
        this.screening_date = new Date(2016, 1, 15);
        this.hidden_date = this.screening_date.toISOString().split('T')[0];
        this.question_age = 0;
    }
    ParticipantScreeningComponent.prototype.changeDate = function (e) {
        this.screening_date = new Date(Date.parse(this.hidden_date));
        console.log("screening date:" + this.screening_date);
        console.log("hidden date" + this.hidden_date);
    };
    ParticipantScreeningComponent.prototype.changeDate2 = function (e) {
        this.hidden_date = this.screening_date.toISOString().split('T')[0];
        console.log("screening date:" + this.screening_date);
        console.log("hidden date" + this.hidden_date);
    };
    ParticipantScreeningComponent = __decorate([
        core_1.Component({
            selector: 'participant-screening',
            templateUrl: 'app/app.participant_screening.html',
            styleUrls: [],
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ParticipantScreeningComponent);
    return ParticipantScreeningComponent;
}());
exports.ParticipantScreeningComponent = ParticipantScreeningComponent;
//# sourceMappingURL=app.participant_screening.js.map
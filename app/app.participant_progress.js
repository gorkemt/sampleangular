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
var ParticipantProgressComponent = (function () {
    function ParticipantProgressComponent() {
        this.phases = new Array();
        this.overall_percent_complete = 0;
        this.title = "Progress Tracker";
        this.screen_width = window.screen.width * 0.8;
        this.phases.push(new Phase("enrollment", "started", 100, "#255255"));
        this.phases.push(new Phase("screening", "not started", 100, '#abb3ff'));
        this.phases.push(new Phase("baseline", "not started", 50, '#000444'));
        this.phases.push(new Phase("booklet 1", "not started", 100, '#dd2144'));
        this.phases.push(new Phase("booklet 2", "not started", 50, '#fca444'));
        this.phase_width = this.screen_width / this.phases.length;
        this.overall_percent_complete = this.calculate_overall_percentage();
    }
    ParticipantProgressComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.phases.forEach(function (phase) {
            var div = jQuery("#id_" + phase.id);
            div.animate({ width: phase.percent_complete / 100 * _this.phase_width, opacity: phase.percent_complete / 100 }, 3000);
        });
    };
    ParticipantProgressComponent.prototype.calculate_overall_percentage = function () {
        var total = 0;
        this.phases.forEach(function (phase) {
            total += phase.percent_complete;
        });
        return total / this.phases.length;
    };
    ParticipantProgressComponent = __decorate([
        core_1.Component({
            selector: 'participant-progress',
            templateUrl: 'app/app.participant_progress.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ParticipantProgressComponent);
    return ParticipantProgressComponent;
}());
exports.ParticipantProgressComponent = ParticipantProgressComponent;
var Phase = (function () {
    function Phase(name, status, percent_complete, color) {
        if (percent_complete === void 0) { percent_complete = 0; }
        if (color === void 0) { color = "#ffffff"; }
        this.name = name;
        this.id = name.replace(/\s/, '_');
        this.status = status;
        this.percent_complete = percent_complete;
        this.color = color;
    }
    return Phase;
}());
exports.Phase = Phase;
//# sourceMappingURL=app.participant_progress.js.map
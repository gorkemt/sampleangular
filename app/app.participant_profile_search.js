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
var ParticipantSearchComponent = (function () {
    function ParticipantSearchComponent() {
        this.notify = new core_1.EventEmitter();
    }
    ParticipantSearchComponent.prototype.onClick = function () {
        var str = { participant_id: this.participant_id, screening_id: this.screening_id };
        this.notify.emit(str);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Number)
    ], ParticipantSearchComponent.prototype, "participant_id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ParticipantSearchComponent.prototype, "notify", void 0);
    ParticipantSearchComponent = __decorate([
        core_1.Component({
            selector: 'participant-search',
            templateUrl: 'app/app.participant_profile_search.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ParticipantSearchComponent);
    return ParticipantSearchComponent;
}());
exports.ParticipantSearchComponent = ParticipantSearchComponent;
//# sourceMappingURL=app.participant_profile_search.js.map
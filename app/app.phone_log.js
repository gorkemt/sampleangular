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
var PhoneLogComponent = (function () {
    function PhoneLogComponent() {
        this.attempt_statuses = [{ idx: 1, name: "Left voicemail message" }, { idx: 2, name: "Left message with relative/friend" }];
        this.fx = this.attempt_statuses[0];
    }
    /*constructor(){
        if(!this.phone_logs)
            this.phone_logs = new Array<PhoneLog>();
        this.newstatus="";
    }*/
    PhoneLogComponent.prototype.addPhoneLog = function () {
        console.log(this.newstatus);
        var log = new PhoneLog();
        log.attempt = this.phone_logs.length + 1;
        log.attempt_date = this.new_attempt_date;
        log.attempt_status = this.newstatus;
        log.next_call_date = this.new_next_call_date;
        this.phone_logs.push(log);
        /*this.new_attempt_date = "";
        this.new_attempt_status =1;
        this.new_next_call_date = "";*/
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PhoneLogComponent.prototype, "notes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PhoneLogComponent.prototype, "phone_logs", void 0);
    PhoneLogComponent = __decorate([
        core_1.Component({
            selector: 'phone-log',
            templateUrl: 'app/app.phone_log.html',
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PhoneLogComponent);
    return PhoneLogComponent;
}());
exports.PhoneLogComponent = PhoneLogComponent;
var PhoneLog = (function () {
    function PhoneLog() {
        if (!this.note)
            this.note = new Note();
    }
    return PhoneLog;
}());
exports.PhoneLog = PhoneLog;
var Note = (function () {
    function Note() {
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=app.phone_log.js.map
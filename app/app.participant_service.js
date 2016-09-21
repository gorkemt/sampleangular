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
var http_1 = require('@angular/http');
var app_participant_profile_1 = require('./app.participant_profile');
var app_phone_log_1 = require('./app.phone_log');
var ParticipantService = (function () {
    function ParticipantService(http) {
        this.http = http;
        this.mainList = new Array();
    }
    ParticipantService.prototype.create_test_items = function () {
        var test_participants = new Array();
        for (var i = 1; i < 1000; i++) {
            var a = new app_participant_profile_1.Participant();
            a.participant_id = i;
            a.screening_id = parseInt(randomNumeric(3));
            a.subject_id = parseInt(randomNumeric(4));
            a.first_name = randomAlpha(10);
            a.last_name = randomAlpha(10);
            a.middle_name = randomAlpha(2);
            a.home_phone = randomPhoneNumber();
            a.gender = Math.floor(Math.random() * 3);
            a.email = randomAlpha(10) + "@" + randomAlpha(5) + '.com';
            a.email_assessment = Math.floor(Math.random() * 2);
            a.opt_for_ebook = Math.floor(Math.random() * 2);
            a.second_last_name = randomAlpha(7);
            a.address.address1 = "2325 Funny blvd";
            a.address.city = "Tampa";
            a.address.state = "FL";
            a.address.zip_code = randomNumeric(5);
            a.notes = this.create_notes();
            a.phone_logs = this.create_phone_logs();
            test_participants.push(a);
        }
        return test_participants;
    };
    ParticipantService.prototype.create_phone_logs = function () {
        var phonelog_array = new Array();
        var d = new Date();
        for (var j = 0; j < 10; j++) {
            var p = new app_phone_log_1.PhoneLog();
            p.attempt_date = d.toUTCString();
            p.attempt = j + 1;
            p.attempt_status = parseInt(randomNumeric(1));
            p.note = this.create_note(parseInt(randomNumeric(2)));
            phonelog_array.push(p);
        }
        return phonelog_array;
    };
    ParticipantService.prototype.create_note = function (length) {
        if (length === void 0) { length = 10; }
        var n = new app_phone_log_1.Note();
        n.note = randomAlpha(length);
        return n;
    };
    ParticipantService.prototype.create_notes = function () {
        var notes_array = new Array();
        for (var i = 0; i < 10; i++) {
            var n = new app_phone_log_1.Note();
            n.note = randomAlpha(20);
            notes_array.push(n);
        }
        return notes_array;
    };
    ParticipantService.prototype.search = function (term) {
        return this.http
            .get("app/participants/?name=" + term)
            .map(function (r) { return r.json().data; });
    };
    ParticipantService.prototype.get_by_participant_id = function (id) {
        this.mainList = this.create_test_items();
        this.mainList.sort(this.sortby_participant_id);
        var p = this.mainList.find(function (x) { return x.participant_id == id; });
        return p;
    };
    ParticipantService.prototype.get_all = function () {
        this.mainList = this.create_test_items();
        this.mainList.sort(this.sortby_participant_id);
        return this.mainList;
    };
    ParticipantService.prototype.sortby_participant_id = function (a, b) {
        if (a.participant_id > b.participant_id) {
            return 1;
        }
        else if (a.participant_id < b.participant_id) {
            return -1;
        }
        else {
            return 0;
        }
    };
    ParticipantService.prototype.search_participant = function (search_objs) {
        search_objs.forEach(function (item, idx) {
        });
        return this.get_all();
    };
    ParticipantService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ParticipantService);
    return ParticipantService;
}());
exports.ParticipantService = ParticipantService;
var SearchObj = (function () {
    function SearchObj(field_name, field_value, equality) {
        this.field_name = field_name;
        this.field_value = field_value;
        this.equality = equality;
    }
    return SearchObj;
}());
exports.SearchObj = SearchObj;
function randomPhoneNumber() {
    var str = "(" + Math.ceil(Math.random() * 9);
    for (var i = 0; i < 9; i++) {
        if (i == 2)
            str += ") ";
        if (i == 5)
            str += "-";
        str += Math.ceil(Math.random() * 9);
    }
    return str;
}
;
function generateRandomString(length, chars) {
    var string = '';
    for (var i = 0; i < length; i++)
        string += chars[Math.floor(Math.random() * chars.length)];
    return string;
}
;
function randomNumeric(length) {
    return generateRandomString(length, '0123456789'.split(''));
}
function randomAlpha(length) {
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return generateRandomString(length, alpha);
}
function randomAlphaNumeric(length) {
    var alphanumeric = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return generateRandomString(length, alphanumeric);
}
function randomDate() {
}
//# sourceMappingURL=app.participant_service.js.map
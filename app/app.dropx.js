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
var DropX = (function () {
    function DropX() {
        this.item2 = {
            value: "Option1",
            choices: ["Option1", "Option2", "Option3"]
        };
        this.item = "2";
    }
    DropX.prototype.onChangeObj = function (newObj) {
        console.log(newObj);
        this.item = newObj;
        // ... do other stuff here ...
    };
    DropX.prototype.itemChanged = function () {
        console.log('it\'s changed');
    };
    DropX = __decorate([
        core_1.Component({
            selector: 'dx',
            template: "<select materialize=\"material_select\" [(ngModel)]=\"item\" (ngModelChange)=\"onChangeObj($event)\" (change)=\"itemChanged()\" name=\"item\"><option value=\"1\">Item 1</option>\n    <option value=\"2\">Item 2</option>\n    <option value=\"3\">Item 3</option>\n    </select>\n    <p>My selected value {{item}}</p>\n    <select [(ngModel)]=\"item2.value\">\n    <option value=\"Option1\">Option1</option>\n    <option value=\"Option2\">Option2</option>\n    <option value=\"Option3\">Option3</option>\n    </select>\n    <p>My selected value {{item2.value}}</p>\n    <md-card>Basic Card</md-card>\n    ",
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], DropX);
    return DropX;
}());
exports.DropX = DropX;
//# sourceMappingURL=app.dropx.js.map
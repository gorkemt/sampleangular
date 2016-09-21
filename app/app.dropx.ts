import {Component} from '@angular/core';


@Component({
    selector:'dx',
    template:`<select materialize="material_select" [(ngModel)]="item" (ngModelChange)="onChangeObj($event)" (change)="itemChanged()" name="item"><option value="1">Item 1</option>
    <option value="2">Item 2</option>
    <option value="3">Item 3</option>
    </select>
    <p>My selected value {{item}}</p>
    <select [(ngModel)]="item2.value">
    <option value="Option1">Option1</option>
    <option value="Option2">Option2</option>
    <option value="Option3">Option3</option>
    </select>
    <p>My selected value {{item2.value}}</p>
    <md-card>Basic Card</md-card>
    `,
    directives:[]
})
export class DropX{
    item:any;
    item2:Object = {
        value:"Option1",
        choices:["Option1", "Option2", "Option3"]
    }
    constructor(){
        this.item = "2";
    }
    onChangeObj(newObj:Object) {
    console.log(newObj);
    this.item = newObj;
    // ... do other stuff here ...
  }
  itemChanged(){
      console.log('it\'s changed');
  }
}
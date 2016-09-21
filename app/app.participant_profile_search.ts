import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'participant-search',
    templateUrl:'app/app.participant_profile_search.html'
})
export class ParticipantSearchComponent{
    @Output() participant_id:Number;
    screening_id:Number;
    subject_id:Number;
    last_name:string;
    @Output() notify:EventEmitter<Object> = new EventEmitter<Object>(); 

    onClick(){
        var str = {participant_id:this.participant_id, screening_id:this.screening_id};
        this.notify.emit(str);
    }
}
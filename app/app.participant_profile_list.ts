import {Component} from '@angular/core'
import {ParticipantProfileComponent, Participant} from './app.participant_profile'
import {ParticipantSearchComponent} from './app.participant_profile_search'
import {ParticipantService} from './app.participant_service';


@Component({
    selector: 'participant-profile_list',
    templateUrl: 'app/app.participant_profile_list.html',
    styleUrls: [],
    directives: [ParticipantSearchComponent],
    providers: [ParticipantService]
})
export class ParticipantProfileListComponent {
    list: Array<Participant>;
    profiles: Array<ParticipantProfileComponent>;
    private participant_service: ParticipantService;

    constructor(private service: ParticipantService) {
        this.participant_service = service;
        this.list = service.get_all(); //.subscribe(profile=>this.profiles=profile);
    }

    onNotify(e: any) {
        console.log(e);
        let all_undefined = true;
        for (var p in e) {
            console.log(p);
            if (e.hasOwnProperty(p) && (e[p] != undefined && e[p] != "")) {

                all_undefined = false;
                console.log('all_undefined: ' + all_undefined);
            }else{
                delete e[p];
            }
        }
        if (all_undefined) {
            this.list = this.participant_service.get_all();
        } else {
            console.log(e);
            this.list = this.list.filter(x=>{
                if(e.participant_id && e.screening_id){
                    return x.participant_id==e.participant_id && x.screening_id==e.screening_id;
                }
                else if(e.participant_id){ 
                return x.participant_id==e.participant_id;
                }
            });
        }
    }

    filter_items(item:ParticipantSearchComponent){

    }


    
}
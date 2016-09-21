import {Component} from '@angular/core'
import {ParticipantProgressComponent, Phase} from './app.participant_progress'
import {ParticipantScreeningComponent} from './app.participant_screening'
import {PhoneLogComponent, Note, PhoneLog} from './app.phone_log'
import {ParticipantService} from './app.participant_service';
import {DropX} from './app.dropx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'participant-profile',
  templateUrl: 'app/app.participant_profile.html',
  styleUrls:[],
  directives:[ParticipantProgressComponent, ParticipantScreeningComponent, PhoneLogComponent, DropX],
  providers: [ParticipantService]
})
export class ParticipantProfileComponent {

  participant:Participant;
  constructor(private service:ParticipantService, private route: ActivatedRoute){

  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.participant = this.service
          .get_by_participant_id(id)
      });
  }
}

export class Address{
  address1:string;
  address2:string;
  city:string;
  state:string;
  zip_code:string;
  distance_to_moffitt:string;
}

export class Participant{
  participant_id: number;
  screening_id: number;
  subject_id:number;
  condition:string;
  first_name:string;
  last_name:string;
  middle_name:string;
  second_last_name:string;
  gender:number;
  home_phone:string;
  mobile_phone:string;
  alternative_phone:string;
  email:string;
  contact_hour:number;
  contact_mins:number;
  contact_ampm:number;
  contact_timezone:number;
  email_assessment:number;
  opt_for_ebook:number;
  address:Address;
  notes:Array<Note>;
  phone_logs:Array<PhoneLog>;
  constructor(){
    this.address = new Address();
    if(!this.notes)
      this.notes = new Array<Note>();
    if(!this.phone_logs)
      this.phone_logs = new Array<PhoneLog>();
  }
}
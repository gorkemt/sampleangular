import {Component} from '@angular/core'
import {ParticipantProgressComponent, Phase} from './app.participant_progress'
import {ParticipantScreeningComponent} from './app.participant_screening'
import {ParticipantProfileComponent} from './app.participant_profile'

@Component({
  selector: 'participant',
  templateUrl: 'app/app.participant.html',
  styleUrls:[],
  directives:[ParticipantProgressComponent, ParticipantScreeningComponent, ParticipantProfileComponent],
  providers: []
})
export class ParticipantComponent{
  constructor(){
    
  }
}
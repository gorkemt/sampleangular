import {Component} from '@angular/core'

@Component({
  selector: 'participant-screening',
  templateUrl: 'app/app.participant_screening.html',
  styleUrls:[],
  directives:[],
  providers: []
})
export class ParticipantScreeningComponent{

  screening_date:Date;
  hidden_date:string;

  question_age:number;
  how_many_years:number;
  how_many_per_week:number;
  smoking_rate_uom:number;
  enrolled_to_quit_smoking:number;
  preferred_delivery_language:number;
  status:string;
  constructor(){

    this.screening_date = new Date(2016, 1,15);
    this.hidden_date=this.screening_date.toISOString().split('T')[0];
    this.question_age = 0;
  }
  
  changeDate(e:Event){
    this.screening_date = new Date(Date.parse(this.hidden_date));
    console.log("screening date:" + this.screening_date);
    console.log("hidden date" + this.hidden_date);
  }

  changeDate2(e:Event){
    this.hidden_date = this.screening_date.toISOString().split('T')[0];
    console.log("screening date:" + this.screening_date);
    console.log("hidden date" + this.hidden_date);
  }
}
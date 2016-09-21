import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Participant } from './app.participant_profile';
import {PhoneLog,Note} from './app.phone_log';

@Injectable()
export class ParticipantService {
  mainList:Participant[];
  constructor(private http: Http) {
    this.mainList = new Array<Participant>();
   }

  create_test_items() {
    let test_participants: Array<Participant> = new Array<Participant>();

    for (var i = 1; i < 1000; i++) {
      let a = new Participant();
      a.participant_id = i;
      a.screening_id = parseInt(randomNumeric(3));
      a.subject_id= parseInt(randomNumeric(4));
      a.first_name = randomAlpha(10);
      a.last_name = randomAlpha(10);
      a.middle_name = randomAlpha(2);
      a.home_phone = randomPhoneNumber();
      a.gender = Math.floor(Math.random()*3);
      a.email = randomAlpha(10)+"@" + randomAlpha(5) +'.com';
      a.email_assessment = Math.floor(Math.random()*2);
      a.opt_for_ebook= Math.floor(Math.random()*2);
      a.second_last_name = randomAlpha(7);
      a.address.address1 = "2325 Funny blvd";
      a.address.city = "Tampa";
      a.address.state = "FL";
      a.address.zip_code = randomNumeric(5);
      a.notes=this.create_notes();
      a.phone_logs= this.create_phone_logs();
      test_participants.push(a);
    }
    return test_participants;
  }
  create_phone_logs(){
    let phonelog_array = new Array<PhoneLog>();
    var d = new Date();
    for(var j=0; j<10;j++){
      let p = new PhoneLog();
      p.attempt_date = d.toUTCString();
      p.attempt=j+1;
      p.attempt_status=parseInt(randomNumeric(1));
      p.note = this.create_note(parseInt(randomNumeric(2)));
      phonelog_array.push(p);
    }
    return phonelog_array;
  }
  create_note(length:number=10){
    var n = new Note();
    n.note = randomAlpha(length);
    return n;
  }
  create_notes(){
    let notes_array = new Array<Note>();
    for(var i=0;i<10;i++){
      let n = new Note();
      n.note = randomAlpha(20);
      notes_array.push(n);
    }
    return notes_array;
  }
  search(term: string): Observable<Participant[]> {
    return this.http
      .get(`app/participants/?name=${term}`)
      .map((r: Response) => r.json().data as Participant[]);
  }
  get_by_participant_id(id:number){
    this.mainList = this.create_test_items();
    this.mainList.sort(this.sortby_participant_id);
    var p = this.mainList.find(x=>x.participant_id==id);
    return p;
  }
  get_all() {
    this.mainList = this.create_test_items();
    this.mainList.sort(this.sortby_participant_id);
    return this.mainList;
  }
  sortby_participant_id(a:Participant, b:Participant){
    if(a.participant_id>b.participant_id){
      return 1;
    }else if (a.participant_id<b.participant_id){
      return -1;
    }else{
      return 0;
    }
  }
  search_participant(search_objs: Array<SearchObj>) {
    search_objs.forEach(function (item, idx) {

    });
    return this.get_all();
  }
}

export class SearchObj {
  field_name: string;
  field_value: any;
  equality: string;
  constructor(field_name: string, field_value: any, equality: string) {
    this.field_name = field_name;
    this.field_value = field_value;
    this.equality = equality;
  }
}

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
};
function generateRandomString(length: Number, chars: Array<string>) {
  var string = '';
  for (var i = 0; i < length; i++)
    string += chars[Math.floor(Math.random() * chars.length)];
  return string;
};

function randomNumeric(length: Number) {
  return generateRandomString(length, '0123456789'.split(''));
}

function randomAlpha(length: Number) {
  var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return generateRandomString(length, alpha);
}

function randomAlphaNumeric(length: Number) {
  var alphanumeric = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return generateRandomString(length, alphanumeric);
}

function randomDate(){

}
import { Component, Input} from '@angular/core';

@Component({
    selector: 'phone-log',
    templateUrl: 'app/app.phone_log.html',
    directives: [],
    providers: []
})
export class PhoneLogComponent { 
    new_attempt_date:string;
    newstatus:number;
    
    new_next_call_date:string;
    attempt_statuses:Object[] = [{idx:1, name:"Left voicemail message"}, {idx:2, name:"Left message with relative/friend"}];
    fx:any= this.attempt_statuses[0];
    @Input()notes:Array<Note>
    @Input() phone_logs:Array<PhoneLog>;
    
    /*constructor(){
        if(!this.phone_logs)
            this.phone_logs = new Array<PhoneLog>();
        this.newstatus="";
    }*/

    addPhoneLog(){
        console.log(this.newstatus);
        var log = new PhoneLog();
        log.attempt = this.phone_logs.length+1;
        log.attempt_date = this.new_attempt_date;
        log.attempt_status = this.newstatus;
        log.next_call_date = this.new_next_call_date;
        this.phone_logs.push(log);
        /*this.new_attempt_date = "";
        this.new_attempt_status =1;
        this.new_next_call_date = "";*/
    }
 }


export class PhoneLog{
    attempt_date:string
    attempt:number
    attempt_status:number
    next_call_date:string
    note:Note
    constructor(){
        if(!this.note)
            this.note =new  Note();
    }
}

export class Note{

    note:string
}
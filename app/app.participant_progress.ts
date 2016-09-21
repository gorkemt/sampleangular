import {Component, Input, Output, EventEmitter} from '@angular/core';


import { AfterViewInit }     from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'participant-progress',
    templateUrl: 'app/app.participant_progress.html'
})
export class ParticipantProgressComponent implements AfterViewInit {
    title: string;
    phases: Array<Phase> = new Array<Phase>();
    screen_width: number;
    phase_width: number;
    overall_percent_complete:number=0;
    constructor() {
        this.title = "Progress Tracker";
        this.screen_width = window.screen.width * 0.8;
        this.phases.push(new Phase("enrollment", "started", 100, "#255255"));
        this.phases.push(new Phase("screening", "not started", 100, '#abb3ff'));
        this.phases.push(new Phase("baseline", "not started", 50, '#000444'));
        this.phases.push(new Phase("booklet 1", "not started", 100, '#dd2144'));
        this.phases.push(new Phase("booklet 2", "not started", 50, '#fca444'));
        this.phase_width = this.screen_width / this.phases.length;
        this.overall_percent_complete = this.calculate_overall_percentage();
    }

    ngAfterViewInit() {
            this.phases.forEach((phase: Phase) => {

                var div = jQuery("#id_" + phase.id);
                div.animate({ width: phase.percent_complete / 100 * this.phase_width, opacity: phase.percent_complete / 100 }, 3000);
            });
    }

    calculate_overall_percentage():number{
        var total:number = 0;
        this.phases.forEach((phase: Phase) => {
            total +=phase.percent_complete;
        });
        return total/this.phases.length;
    }

}

export class Phase {
    id:string;
    name: string;
    status: string;
    percent_complete: number;
    color: string;
    constructor(name: string, status: string, percent_complete: number = 0, color: string = "#ffffff") {
        this.name = name;
        this.id = name.replace(/\s/, '_');
        this.status = status;
        this.percent_complete = percent_complete;
        this.color = color;
    }

}
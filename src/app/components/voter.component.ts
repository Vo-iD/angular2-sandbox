import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    templateUrl: 'app/components/voter.component.html',
    styles: [`
        .voter-wrapper {
            width: 20px;
            color: #999;
            text-aligin: center;
            margin-left: 50px;
        }

        .glyphicon {
            cursor: pointer;
        }

        .voted {
            color: orange;
        }
    `]
})

export class VoterComponent {
    voteStep = 1;
    myVote = 0;

    @Output() change = new EventEmitter(); 
    @Input() voteCount = 10;

    voteUp() {
        if(this.myVote == 1){
            return;
        }
        
        var votes = this.voteStep;
        this.recalculateVotes(votes);
    }

    voteDown() {
        if(this.myVote == -1){
            return;
        }

        var votes = -1 * this.voteStep;
        this.recalculateVotes(votes);
    }

    recalculateVotes(vote) {
        this.myVote += vote;
        this.voteCount += vote;
    }

    createOutputValue(vote){
        this.change.emit({ vote: vote });
    }
}
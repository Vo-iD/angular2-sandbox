import {Component, Input} from 'angular2/core'
import {TweetModel} from './../models/tweet.model';
import {LikeComponent} from './like.component';

@Component({
    selector: 'tweet',
    templateUrl: 'app/components/tweet.component.html',
    styles: [`
        .tweet { 
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .tweet-image {
            border-radius: 10%;
            width: 150px;
            height: 150px;
        }

        .tweet-title {
            font-weight: bold;
        }

        .tweet-owner {
            color: #ccc;
        }

        .tweet-content {
            font-size: 16px;
        }
    `],
    directives: [LikeComponent]
})

export class TweetComponent {
    @Input() tweetMetainfo;

    constructor() {
        console.log(this.tweetMetainfo);
    }
}
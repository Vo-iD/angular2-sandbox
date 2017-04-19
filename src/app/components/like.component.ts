import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    templateUrl: 'app/components/like.component.html',
    styles: [`
        .glyphicon-heart {
            color: #ccc;
        }
        
        .liked {
           color: deeppink
        }

        .glyphicon {
            cursor: pointer
        }
    `]
})

export class LikeComponent {
    @Input() isLiked = false; // better use common object here, tweet for example
    @Input() likesCount = 10;

    likeChange() {
        this.isLiked ? this.likesCount-- : this.likesCount++ ;
        this.isLiked = !this.isLiked;
    }
}

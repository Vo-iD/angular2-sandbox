import {TweetModel} from './../models/tweet.model';

export class TweetService {
    getRandomTweets() : TweetModel[] {
        return [{
            liked: false,
            likesCount: 12,
            content: 'Everyone is special',
            title: 'X-man thoughts',
            owner: 'Xavier',
            photoUrl: 'http://media.makeadare.com/img/6160cf6aa/image_bceabb1299.jpg'
        }, {
            liked: true,
            likesCount: 47,
            content: 'Regeneration is really cool',
            title: 'My skills',
            owner: 'Wolverine',
            photoUrl: 'http://mbadbkweb.famp-art.com/wp-content/uploads/2011/07/wolverine.jpg'
        }, {
            liked: true,
            likesCount: 34,
            content: 'Who is your daddy?!',
            title: 'Are you sure?',
            owner: 'Storm',
            photoUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7c/62/d8/7c62d8678795d2ef5cf1ffd9fc214f90.jpg'
        }];
    }
}
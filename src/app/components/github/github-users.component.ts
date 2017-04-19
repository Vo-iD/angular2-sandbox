import * as Rx from "rxjs/Rx";
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {GithubService} from './../../services/github.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'github-users',
    templateUrl: 'app/components/github/github-users.component.html',
    providers: [GithubService, HTTP_PROVIDERS]
})

export class GithubUsersComponent implements OnInit {

    constructor(private _githubService: GithubService) {
    }

    ngOnInit() {
        console.log("i'm inside");
        var urserStream = this._githubService.getUser('octocat');
        var followersStream = this._githubService.getFollowers('octocat');
        
        Rx.Observable.forkJoin(urserStream, followersStream)
            .map(joined => new Object({user: joined[0], folowers: joined[1]}))
            .subscribe(
                result => console.log(result)
            );
    }
}
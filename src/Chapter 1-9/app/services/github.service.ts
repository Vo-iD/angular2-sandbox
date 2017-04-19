import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {GithubUser} from './githubUser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private _loginKey = '{login}';
    private _userUrl = 'https://api.github.com/users/{login}';
    private _followersUrl = 'https://api.github.com/users/{login}/followers';

    constructor(private _http: Http) {
    }

    getUser(login: string): Observable<GithubUser> {
        var url = this._getFinalUrl(this._userUrl, login);
        
        return this._http.get(url)
            .map(res => res.json());
    }

    getFollowers(login: string): Observable<GithubUser[]> {
        var url = this._getFinalUrl(this._followersUrl, login);

        return this._http.get(url)
            .map(res => res.json());
    }

    private _getFinalUrl(urlPattern: string, login: string): string {
        return urlPattern.replace(this._loginKey, login);
    }
}
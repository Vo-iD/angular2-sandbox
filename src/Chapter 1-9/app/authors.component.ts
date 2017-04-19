import {Component} from 'angular2/core'
import {AuthorsService} from './authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        <ul>
            <li *ngFor="#author of authors">Awesome {{ author }}</li>
        </ul>
    `,
    providers: [AuthorsService]
})

export class AuthorsComponent {
    authors;

    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
}
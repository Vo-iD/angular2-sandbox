import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {AlbumsComponent} from './components/album/albums.component';
import {ContactComponent} from './components/contact/contact.component';

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] },
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [RouterOutlet]
})

export class AppComponent {
}

/*
    <div *ngIf="courses.length > 0">
        List of courses
    </div>
    <div *ngIf="courses.length == 0">
        You don't have any courses
    </div>
 */

//  <h1>Tweets</h1> <tweet *ngFor='#tw of tweets' [tweetMetainfo]="tw"></tweet>

/*
<ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'">
                <a (click)="viewMode = 'map'">Map view</a>
            </li>
            <li [class.active]="viewMode == 'list'">
                <a (click)="viewMode = 'list'">List view</a>
            </li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>
*/

/*
    <ul>
            <li *ngFor="#course of courses, #i = index">
                {{i + 1}} - {{course}}
            </li>
        </ul>
 */

/*
            <li *ngFor="#course of courses, #i = index">
                {{i + 1}} - {{course}}
            </li> 
            ==
            <template ngFor [ngForOf]="courses" #course #i = index>
                <li>{{i + 1}} - {{course}}</li>
            </template>

 */

/*
    angular pipes (!!!)
    course = {
            title: "Angular 2 for Beginners",
            rating: 4.9745,
            students: 5981,
            price: 99.95,
            releaseDate: new Date(2016, 3, 1)
        }
        {{ course.title | uppercase | lowercase }}
        <br />
        {{ course.students | number }}
        <br />
        {{ course.rating | number:'1.2-2' }}
        <br />
        {{ course.price | currency:'AUD':true:'2.2-2' }}
        <br />
        {{ course.releaseDate | date:'MMM yyyy'}}
        <br />
        {{ course | json }}
*/

/* custom pipes: 
    post = {
        title: "Angular Tutorial for Beginners",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `
    }

        {{ post.title }}
        <br />
        {{ post.body | summary:10 }}
        
 */

/*
possible nullable properties: 

            <li> Assigned to: {{ task.assignee?.role?.name }}</li>
 */

/*
ng-content can be used instead of parameters. For example for insert some html inside component
        <bs-panel>
            <div class="heading">Head</div>
            <div class="body">This is the body!</div>
            <div class="body">This is another the body!</div>
        </bs-panel>
 */

/*
<zippy title="Who can contact me?">
    Content of who can contact me
</zippy>

<zippy title="Who can see my stuff?">
    Content of who can see my stuff
</zippy>
 */
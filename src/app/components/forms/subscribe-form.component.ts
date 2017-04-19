import {Component} from 'angular2/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/components/forms/subscribe-form.component.html'
})

export class SubscribeFormComponent {
    onSubmit(form){
        console.log(form);
    }
}
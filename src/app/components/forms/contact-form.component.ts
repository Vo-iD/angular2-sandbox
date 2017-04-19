import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/components/forms/contact-form.component.html'
})

export class ContactFormComponent {
    log(message) {
        console.log(message);
    }

    onSubmit(form){
        debugger;
        console.log(form);
    }
}
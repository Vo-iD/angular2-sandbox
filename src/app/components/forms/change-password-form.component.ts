import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './../../validators/passwordValidators';

@Component({
    selector: 'change-password-form',
    templateUrl: 'app/components/forms/change-password-form.component.html'
})

export class ChangePasswordComponent {
    validPassword = "123";
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            confirmPassword: ['', Validators.compose([
                Validators.required
            ])]
        }, { validator: PasswordValidators.shouldMatch('newPassword', 'confirmPassword') });
    }

    changePassword() {
        var currentPassword = this.form.find('currentPassword').value;
        if(currentPassword != this.validPassword){
            this.form.find('currentPassword').setErrors({
                invalidCurrentPassword: true
            });
        }
        else {
            alert("Password successfully changed.");
        }
    }
}
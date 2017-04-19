import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidators {
    static shouldMatch(newPasswordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup) => {
            let passwordInput = group.controls[newPasswordKey];
            let passwordConfirmationInput = group.controls[confirmPasswordKey];

            var ss = `asd
            asdas
            asd`;


            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
        }
    }
}
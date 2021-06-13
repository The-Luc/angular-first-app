import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class LoginValidators {
  static isEqualPassword(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('password')!;
    const cfmPass = control.get('cfmPassword')!;

    if (newPassword.value !== cfmPass.value) {
      return { isEqualPassword: true };
    }
    return null;
  }

  static checkOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout((): any => {
        if ((control.value as string) !== '123') {
          resolve({ checkOldPassword: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}

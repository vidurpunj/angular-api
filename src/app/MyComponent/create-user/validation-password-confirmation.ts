import {ValidationErrors, AbstractControl, ValidatorFn} from "@angular/forms";

export const passwordConfirmation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password: any = control.get('password');
  const password_confirmation = control.get('password_confirmation');
  if (password.value === password_confirmation?.value) {
    null
  } else {
    control.get('password_confirmation')?.setErrors({passwordConfirmation: true});
  }
  return null;
};


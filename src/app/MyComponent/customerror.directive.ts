import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function email(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" ?
      {email: {value: control.value}} : null;
  }
}



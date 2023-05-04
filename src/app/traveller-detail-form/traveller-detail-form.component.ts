import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-traveller-detail-form',
  templateUrl: './traveller-detail-form.component.html',
})
export class TravellerDetailFormComponent {
  travellerDetailForm: FormGroup;
  formSubmitted = false;
  channelOptions = ['Partner', 'Agent', 'Direct Cutomer'];
  meetAndGreetRequestedOptions = ['Yes', 'No'];

  constructor(private fb: FormBuilder) {
    this.travellerDetailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      channel: ['', Validators.required],
      meetAndGreetRequested: ['', Validators.required],
      travelDateTime: ['', Validators.required],
      bookingPrice: ['', Validators.required],
    });
  }

  onSubmit = (): void => {
    this.formSubmitted = true;
    if (this.travellerDetailForm.invalid) {
      return;
    }
    console.log('Traveller Details Form:');
    console.log(this.travellerDetailForm.value);

    this.resetForm();
  };

  resetForm = (): void => {
    this.travellerDetailForm.reset({ emitEvent: false });
    Object.keys(this.travellerDetailForm.controls).forEach((key) => {
      this.travellerDetailForm.get(key)?.setErrors(null);
    });
    this.travellerDetailForm.markAsPristine();
    this.travellerDetailForm.markAsUntouched();
    this.travellerDetailForm.updateValueAndValidity();
  };

  checkIsFieldInvalid = (name: string): boolean => {
    const input = this.travellerDetailForm.get(name);
    return Boolean(
      input?.hasError('required') &&
        (input?.dirty || input?.touched || this.formSubmitted)
    );
  };

  isEmailValid = (): boolean => {
    const input = this.travellerDetailForm.get('email');
    return Boolean(
      input?.hasError('email') &&
        (input?.dirty || input?.touched || this.formSubmitted)
    );
  };

  numericOnly(event: KeyboardEvent): boolean {
    const pattern = /^([0-9])$/;
    const result = pattern.test(event.key);
    return result;
  }
}

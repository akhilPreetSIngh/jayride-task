import { Component } from '@angular/core';

interface TravellerDetailForm {
  name: string;
  email: string;
  channel: string;
  meetAndGreetRequested: string;
  travelDateTime: string;
  bookingPrice: string;
}

@Component({
  selector: 'app-traveller-detail-form',
  templateUrl: './traveller-detail-form.component.html',
})
export class TravellerDetailFormComponent {
  form: TravellerDetailForm = {
    name: '',
    email: '',
    channel: '',
    meetAndGreetRequested: '',
    travelDateTime: '',
    bookingPrice: '',
  };

  submitForm = () => {
    console.log('this is the update form values:', this.form);
  };
}

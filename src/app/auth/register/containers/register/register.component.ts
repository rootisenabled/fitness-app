import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() {}

  registerUser(event: FormGroup) {
    console.log(event.value);
  }
}

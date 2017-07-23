import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() {
    const password = this.form.get('password');
    return password.hasError('required') && password.touched;
  }

  get emailFormat() {
    const email = this.form.get('email');
    return email.hasError('email') && email.touched;
  }

}

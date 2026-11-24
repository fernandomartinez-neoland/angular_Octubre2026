import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  imports: [LoginFormComponent],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {}

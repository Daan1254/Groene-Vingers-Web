import { Component, EventEmitter } from '@angular/core';
import {AuthService} from "../../components/auth/auth.service";

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public signUp: boolean = false

  constructor(public readonly authService: AuthService) {
  }
}

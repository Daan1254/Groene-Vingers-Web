import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService: AuthService) {
  }

  @Output() public toggleSignUp = new EventEmitter();
    public formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    toggle() {
      this.toggleSignUp.emit()
    }


  async onSubmit() {
      if (this.formGroup.invalid) return;
    const {email, password} = this.formGroup.value
    await this.authService.login(email as string, password as string )
  }
}

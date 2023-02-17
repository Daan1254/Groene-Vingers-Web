import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    @Output() public toggleSignUp = new EventEmitter();

    toggle() {
      this.toggleSignUp.emit()
    }

}

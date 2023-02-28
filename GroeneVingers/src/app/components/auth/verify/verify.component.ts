import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{
  constructor(private readonly authService: AuthService) {
  }

  async ngOnInit() {
    this.authService.verify()
  }
}

import {CanActivate, Router} from "@angular/router";
import {getCookie} from "typescript-cookie";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public readonly authService: AuthService, public readonly router: Router){}

  async canActivate() {
    return this.checkUserAccess();
  }

  private checkUserAccess(): boolean {
    if (!getCookie('GroeneVinger-Auth-V1')) {
      console.log('No token found')
      this.router.navigate(['/login'])
      return false;
    }

    this.authService.verify().subscribe((response) => {

    })
    // if (!hasAccess) {
    //   console.log('No access')
    //   this.router.navigate(['/login'])
    //   return false
    // }

    return true
  }
}

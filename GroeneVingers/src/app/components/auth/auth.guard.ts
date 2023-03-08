import {CanActivate, Router} from "@angular/router";
import {getCookie} from "typescript-cookie";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs";
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public readonly authService: AuthService, public readonly router: Router){}

  async canActivate() {
    return this.checkUserAccess();
  }

  private checkUserAccess(): boolean {
    if (!getCookie('GroeneVinger-Auth-V1')) {
      this.router.navigate(['/login'])
      return false;
    }

    this.authService.verify()?.pipe(
      catchError((err) => {
        this.router.navigate(['/login'])
        return err
      })
    ).subscribe(() => {
      return true
    })

    return true
  }
}

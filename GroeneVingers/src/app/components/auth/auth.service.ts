import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {getCookie, setCookie} from "typescript-cookie";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly  http: HttpClient, private readonly router: Router) { }
  public error: string | null = null
  public user: object | null = null

  public async login(email: string, password: string) {
    try {
      this.http.post(`http://localhost:3000/api/auth/login`, {email, password}).subscribe(async (response) => {
        console.log(response)
        setCookie('GroeneVinger-Auth-V1', (response as { token: string }).token)
        await this.router.navigate([ '/verify'])
      });
    } catch (e) {
      console.error(e)
      if (e instanceof Error) {
        console.error(e.message)
        this.error = e.message
      }
    }
  }

  verify(): boolean {
    try {
      this.http.get(`http://localhost:3000/api/auth/validate`, {headers: {
        'auth-token': getCookie('GroeneVinger-Auth-V1') as string
        }}).subscribe((response) => {
          if (response) {
            this.user = response
            return true
          }
        return !!response;
      });
    } catch (e) {
      console.error(e)
      if (e instanceof Error) {
        console.error(e.message)
        this.error = e.message
      }
      return false;
    }
    return false;
  }
}

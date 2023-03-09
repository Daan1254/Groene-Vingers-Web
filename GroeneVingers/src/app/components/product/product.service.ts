import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient ) { }


  public async getProducts() {
      try {
          return await this.http.get('http://localhost:3000/api/product').toPromise()
      } catch(e) {
        console.error(e)
        if (e instanceof Error) {
          console.error(e.message)
        }
        return []
      }
  }
}

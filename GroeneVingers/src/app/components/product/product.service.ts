import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    public isLoading: boolean = false;
    constructor(private http: HttpClient ) { }


  public async getProducts() {
      this.isLoading = true;
      try {
          return await this.http.get('http://localhost:3000/api/product').toPromise()
      } catch(e) {
        console.error(e)
        if (e instanceof Error) {
          console.error(e.message)
        }
        return []
      } finally {
        this.isLoading = false;
      }
  }

  public async getProduct(uuid: string) {
      this.isLoading = true;
      try {
          return await this.http.get(`http://localhost:3000/api/product/${uuid}`).toPromise()
      }
      catch(e) {
        console.error(e)
      } finally {
        this.isLoading = false;
      }
  }
}

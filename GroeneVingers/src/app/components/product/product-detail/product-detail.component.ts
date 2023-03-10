import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private subscription: Subscription = null
  public product: any = null
  constructor(private readonly activeRoute: ActivatedRoute, public readonly productService: ProductService) {}

  getCurrentColorImage() {
    const url = this.product.image

    if (!url) {
      return ''
    }

    const splittedUrl = url.split('?')
    splittedUrl[1] = 'text=""'
    return splittedUrl.join('?')
  }

  ngOnInit() {
      this.subscription = this.activeRoute.params.subscribe(async params => {
        this.product = await this.productService.getProduct(params.id)
      })
  }

}

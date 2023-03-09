import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: any = []
  public activeProducts: any = []
  public pageNumber = 1
  public pageSize = 16
  public maxSize = 32
  constructor(private readonly productService: ProductService) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts()
    this.maxSize = Math.ceil(this.products.length / this.pageSize)
    this.loadActiveProducts(this.pageNumber)
  }


  loadActiveProducts(pageNumber: number) {
    if (pageNumber > this.maxSize) {
      pageNumber = 1
    }
    this.pageNumber = pageNumber
    if (!this.products || this.products.length === 0) {
      return;
    }
    this.activeProducts = this.products.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
  }
}

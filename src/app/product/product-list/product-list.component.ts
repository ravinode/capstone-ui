import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product-service';
import { Product } from '../model/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 productList: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (products: Product) => this.productList = products,
      (error) => console.log(error)
    );

  }

}

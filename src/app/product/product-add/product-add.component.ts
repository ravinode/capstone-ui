import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  products= [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
    'productname': new FormControl(null, Validators.required),
    'productdesc': new FormControl(null),
    'producturl': new FormControl(null, Validators.required),
    'productcategory': new FormControl(null, Validators.required),
    'productcost': new FormControl(null, Validators.required)
    });
  }

  onAddProduct() {
    this.products.push({
      name: this.productForm.get('productname').value,
      description: this.productForm.get('productdesc').value,
      // producturl: this.productForm.get('producturl').value,
      category: this.productForm.get('productcategory').value,
      price: this.productForm.get('productcost').value
    });
    this.productService.createProduct(this.products);
  }
}

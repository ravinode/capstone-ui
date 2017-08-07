import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
    'productName': new FormControl(null,Validators.required),
    'productDesc': new FormControl(null),
    'productCategory': new FormControl(null,Validators.required),
    'productCost': new FormControl(null,Validators.required),
      
    });
  }

}

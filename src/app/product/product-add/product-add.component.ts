import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product-service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product-model';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  products = [];
  buttonAddUpd = "Add";
  updateID;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
    'productname': new FormControl(null, Validators.required),
    'productdesc': new FormControl(null),
    'producturl': new FormControl(null, Validators.required),
    'productcategory': new FormControl(null, Validators.required),
    'productcost': new FormControl(null, Validators.required)
    });

    this.productService.productUpdated.subscribe(
      (result: any) => {
        this.updateID = result[0]._id;
        console.log(result[0].name);
        this.buttonAddUpd = "Update";
        this.productForm.patchValue({
          'productname': result[0].name,
          'productdesc': result[0].description,
          'producturl': result[0].producturl,
          'productcategory': result[0].category,
          'productcost': result[0].price
        });
      }
    );
    
    
  }

  onReset()
  {
    this.productForm.reset();
    this.products = [];
    this.buttonAddUpd = "Add";
  }
  onAddProduct() {
    this.products.push(
      {
        name: this.productForm.get('productname').value,
        description: this.productForm.get('productdesc').value,
        category: this.productForm.get('productcategory').value,
        producturl: this.productForm.get('producturl').value,
        price: this.productForm.get('productcost').value
      });

    if (this.buttonAddUpd === "Add")
      {
      this.productService.createProduct(this.products).subscribe(
        (response) => {
          this.productService.productAdded.emit("Successfully added");
        },
        (error) => console.log(error));

      this.productForm.reset();
      this.products = [];
      }

    else if (this.buttonAddUpd === "Update")
      {
      this.products.push(
        {
          name: this.productForm.get('productname').value,
          description: this.productForm.get('productdesc').value,
          category: this.productForm.get('productcategory').value,
          producturl: this.productForm.get('producturl').value,
          price: this.productForm.get('productcost').value
        });
      console.log("Update" + this.updateID + this.products);
      this.productService.deleteServer(this.updateID).subscribe(
        (response) => {
          console.log("Response delete" + response);
        },
        (error) => console.log(error));

      this.productService.createProduct(this.products).subscribe(
        (response) => {
          this.productService.productAdded.emit("Successfully added");
        },
        (error) => console.log(error));

      this.productForm.reset();
      this.products = [];
      this.buttonAddUpd = "Add";
      }
      
  }
}

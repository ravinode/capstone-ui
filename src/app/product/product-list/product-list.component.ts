import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product-service';
import 'rxjs/Rx';
import { Product } from '../model/product-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 productList = [];
 updateProduct = [];
 droppedItems= [];
 categoryList= [];
 categoryValue = 'empty';
  constructor(private productService: ProductService) {
  }
  

  ngOnInit() {
     this.getProductList();
     this.getCategory();
     this.productService.productAdded.subscribe(
       (result: any) => {
         this.getProductList();
         this.getCategory();
       }
     );
  }
  onItemDrop(e: any) {
    this.droppedItems.push(e.dragData);
    this.categoryValue = e.dragData;
    console.log(this.categoryValue);
  }
// On clear filter
  onClear() {
    this.droppedItems = [];
    this.categoryValue = 'empty';
  }
  // Logic to edit
  onEdit(id, name, category, description, producturl, price) {
    this.updateProduct.push(
      {
        _id: id,
        name: name,
        description: description,
        category: category,
        producturl: producturl,
        price: price
      });
    this.productService.productUpdated.emit(this.updateProduct);
    this.updateProduct = [];
  }
// Delete server based on id
  deleteServer(id) {
    console.log(id);
    this.productService.deleteServer(id).subscribe(
      (response) => {
        console.log('Response delete' + response);
        this.productService.productAdded.emit('Successfully added');
      },
      (error) => console.log(error));
  }
// list the product from Mongo DB
  getProductList() {
      this.productService.getProductList().subscribe(
      (products: any[]) => {
        this.productList = products;
      },
      (error) => console.log(error)
    );

  }
// get category from Mongo DB
  getCategory() {
  this.productService.getCategory().subscribe(
    (category: any[]) => {
      this.categoryList = category;

    },
    (error) => console.log(error)
  );
}
}

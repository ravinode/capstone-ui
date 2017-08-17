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

  onItemDrop(e: any) {
    this.droppedItems.push(e.dragData);
    this.categoryValue = e.dragData;
    console.log(this.categoryValue);
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


  onClear() {
    this.droppedItems = [];
    this.categoryValue = 'empty';
  }
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

    console.log(this.updateProduct);

    this.productService.productUpdated.emit(this.updateProduct);
    this.updateProduct = [];
  }

  deleteServer(id) {
    console.log(id);
    this.productService.deleteServer(id).subscribe(
      (response) => {
        console.log('Response delete' + response);
        this.productService.productAdded.emit('Successfully added');
      },
      (error) => console.log(error));
  }

  getProductList() {
      this.productService.getProductList().subscribe(
      (products: any[]) => {
        this.productList = products;
      },
      (error) => console.log(error)
    );

  }

  getCategory() {
  this.productService.getCategory().subscribe(
    (category: any[]) => {
      this.categoryList = category;

    },
    (error) => console.log(error)
  );
}
}

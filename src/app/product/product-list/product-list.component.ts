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
 productList =[];
 updateProduct = [];
 space = ', ';
 droppedItems=[];
  constructor(private productService: ProductService) {
    
  }

  onItemDrop(e: any) {
    // Get the dropped data here 
    console.log(e.dragData);
    
    this.droppedItems.push(e.dragData);
  }

  ngOnInit() {
    
     this.getProductList();
     this.productService.productAdded.subscribe(
       (result: any) => {
         this.getProductList();
       }
     );

     
  }

  onEdit(id, name, category, description, producturl, price)
  {
   
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

  deleteServer(id)
  {
    console.log(id);
    
    this.productService.deleteServer(id).subscribe(
      (response) => {
        console.log("Response delete"+response);
        
        this.productService.productAdded.emit("Successfully added");
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

}

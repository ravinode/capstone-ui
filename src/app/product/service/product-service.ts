import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Product } from '../model/product-model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {
    
    productAdded = new EventEmitter<String>();
    productUpdated = new EventEmitter<any>();

    constructor(private http: Http) {}

    getProductList() {
        return this.http.get('https://still-ravine-76105.herokuapp.com/listProduct')
        .map((response: Response) => {
            return response.json();
        }
        ).catch(
        (error: Response) => {
            return Observable.throw('Error in listing ');
        }
        );
    }

    createProduct(products: any) {
        const headers = new Headers({'Content-type': 'application/json'});
        const result = this.http.post('https://still-ravine-76105.herokuapp.com/create', products[0], {headers});
        return result;
    }

    deleteServer(id: String) {
        const result = this.http.delete('https://still-ravine-76105.herokuapp.com/delete/' + id);
        return result;
    }

    getCategory() {
        return this.http.get('https://still-ravine-76105.herokuapp.com/getCategory')
            .map((response: Response) => {
                return response.json();
            }
            ).catch(
            (error: Response) => {
                return Observable.throw('Error in listing ');
            }
            );
    }
}

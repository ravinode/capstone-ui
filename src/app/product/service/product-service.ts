import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService
{
    constructor(private http: Http) {}

    getProductList()
    {
        return this.http.get('https://still-ravine-76105.herokuapp.com/listProduct')
        .map((response: Response) =>{
            return response.json;
        }
        ).catch(
        (error: Response) => {
            return Observable.throw('Error in listing ');
        }
        );
    }

    createProduct(products: any[])
    {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://still-ravine-76105.herokuapp.com/createProduct',products,{headers});
    }

}
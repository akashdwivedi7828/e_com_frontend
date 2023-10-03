import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../component/product/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTodoService {
  deleteProduct(productId: number): Observable<string> {
    const url = `http://localhost:8909/deleteProductById/${productId}`;
    return this.http.delete<string>(url);
  }
  editProduct(product: Product): Observable<Product> {
    // Make an HTTP PUT request to update the product
    const url = `http://localhost:8909/updateProductById/${product.productid}`;
    return this.http.put<Product>(url, product);
  }

  constructor(private http: HttpClient) { }

  getAllProductOfSeller(sellerid:any){
    return this.http.get<Product[]>(`http://localhost:8909/getProductBySellerId/${parseInt(sellerid)}`)
 }

 addProduct(product:Product, sellerid:any, categoryid: number){


  // const formData = new FormData();
  //   for (const key in product) {
  //     if (Object.prototype.hasOwnProperty.call(product, key)) {
  //       const value = product[key];
  //       if(key != "productid") {
  //         formData.append(key, value);
  //       }
        
  //       // You can perform actions with each property here
  //     }
  //   }

  return this.http.post<Product>(`http://localhost:8909/addProduct/${parseInt(sellerid)}/${categoryid}`, product)
}

  // getAllProducts(){
    
  //   let products = this.http.get<Product[]>(`http://localhost:8909/getAllProducts`);
  //   console.log("@@@@@getAllProducts", products)
  //   return products;
  // }

  getAllProducts(): Observable<Product[]> {
    // Make the HTTP GET request and return the observable

    
    let prodcts = this.http.get<Product[]>(`http://localhost:8909/getAllProducts`);
    console.log("@@@@@getAllProducts", prodcts)
    return prodcts;

  }

  buyProduct(request: any ) {
    console.log("@@request",  request)
    return this.http.post(`http://localhost:8909/addProductToUserPurchase`, request)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  numberOfCartItems = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) {
    this.getLoggedUserCart().subscribe({
      next:(response) => {
        // console.log(response);
        this.numberOfCartItems.next(response.numOfCartItems);
      },
      error:(err) => {
        console.log(err);
        
      }
    })
  }

  header:any = {
    token: localStorage.getItem('userToken')
  }
  addToCart(productId:string):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart` ,
    {productId:productId} , {headers: this.header} )
  }

  getLoggedUserCart():Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart` ,
    {headers: this.header} )
  }

  removeCartItem(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
    {headers: this.header} )
  }

  updateItemCount(productId:string, count:number ):Observable<any>
  {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
    {count: count},
    {headers: this.header} )
  }

  removeAllCart():Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    {headers: this.header} )
  }
  
  onlinePayMent(shippingAddres:any , cartId:string)
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` ,
    {shippingAddress:shippingAddres},
    {headers: this.header} )
  }
}

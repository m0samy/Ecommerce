import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService , private _ToastrService:ToastrService)
  {

  }
  cartDetails:any = null;
  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next:(response) =>{
        this.cartDetails = response.data;
        // console.log(this.cartDetails);
      },
      error:(err) =>{
        console.log(err);
        
      }
    })
  }

  removeItem(productId:string)
  {
    this._CartService.removeCartItem(productId).subscribe({
      next:(response) => {
        // console.log(response.data);
        this.cartDetails = response.data;
        this._ToastrService.success("Remove Product Success")
        
      }
    })
  }

  updateItemCount(productId:string , count:number)
  {
    this._CartService.updateItemCount(productId, count).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        this._ToastrService.success("Success")
      },
      error: (err) => {
        // console.log(err);
        
      }
    })
  }

  removeAllCart()
  {
    this._CartService.removeAllCart().subscribe({
      next:(response) => {
        // console.log(response.data);
        this.cartDetails = response.data;
        this._ToastrService.success("Remove All Cart Success")
        
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any [] =[];
  searchTerm:string = '';
  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService) {

  }

  addToCArt(productId:string)
  {
    this._CartService.addToCart(productId).subscribe({
      next:(respons) => {
        // console.log(respons);
        this._CartService.numberOfCartItems.next(respons.numOfCartItems);
        this._ToastrService.success("Add Product Success")
      },
      error:(err) => {
        // console.log(err);
        this._ToastrService.error("Error not add product")
        
      }
    })
  }

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response) => {
        // console.log(response.data);
        this.products = response.data
        
      },
      error:() => {

      }
    })
  }

}

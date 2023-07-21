import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService , private _ToastrService:ToastrService) {

  }
  productDetails:any;
  productId:any ;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      this.productId = params.get('id')
    });
    this._ProductsService.getProductDetails(this.productId).subscribe({
      next:(response) => {
        // console.log(response.data);
        this.productDetails = response.data;
      }
    })
  }

  addToCArt(productId:string)
  {
    this._CartService.addToCart(productId).subscribe({
      next:(response) => {
        // console.log(response);
        this._CartService.numberOfCartItems.next(response.numberOfCartItems);
        this._ToastrService.success("Add Product Success")
        
      },
      error:(err) => {
        // console.log(err);
        this._ToastrService.error("Error not add product")
        
      }
    })
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
}

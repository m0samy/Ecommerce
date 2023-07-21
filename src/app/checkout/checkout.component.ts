import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private _CartService:CartService)
  {

  }

  shippingAddress:FormGroup = new FormGroup({
    details:new FormControl(null , [Validators.required]),
    phone:new FormControl(null , [Validators.required]),
    city:new FormControl(null , [Validators.required]),
  });
  
  navigateToPage(url:string)
  {
    window.location.href = url;
  }
  handleSubmit(shippingAddress:FormGroup)
  {
    // console.log(shippingAddress.value);
    this._CartService.onlinePayMent(shippingAddress.value , "64a55eb46bfa655e96df03c6").subscribe({
      next:(response:any) => {
        // console.log(response.session.url);
        this.navigateToPage(response.session.url)
      },
      error:(err)=> {
        console.log(err);
      }
    })
  }
}

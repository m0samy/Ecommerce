import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean = false;
  cartNumbers:number = 0;
  
  constructor(private _AuthService:AuthService , private _CartService:CartService) {

    _CartService.numberOfCartItems.subscribe({
      next: (x) => {
        // console.log(value);
        this.cartNumbers = x;
      }
    });
    _AuthService.userData.subscribe({
      next: ()=> {
        if(_AuthService.userData.getValue() !== null) {
          this.isLogin = true;
        }
        else {
          this.isLogin = false;
        }
      }
    })
  }
  
  logOut() {
    this._AuthService.logOut();
  }
}

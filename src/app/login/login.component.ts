import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router , private _ToastrService:ToastrService) {

  }
  isLoading:boolean = false;
  apiError:string = '';

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
  });
  handleLogin(loginForm:FormGroup) {
    this.isLoading = true;
    if(loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe({
        next: (response) => {
          if(response.message === 'success') {
            localStorage.setItem('userToken' , response.token);
            this._AuthService.decodedUserData();
            this.isLoading = false;
            this._Router.navigate(['/home']);
            this._ToastrService.success("Login Success")
            // console.log(response);
            
          }
          
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
          // console.log(err);
          
        }
      })
    }
  }
}

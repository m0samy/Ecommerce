import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BrnaddetailsComponent } from './brnaddetails/brnaddetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , canActivate: [AuthGuard] , component:HomeComponent},
  {path:'categories' , canActivate: [AuthGuard] , component:CategoriesComponent},
  {path:'cart' , canActivate: [AuthGuard] , component:CartComponent},
  {path:'checkout' , canActivate: [AuthGuard] , component:CheckoutComponent},
  {path:'brands' , canActivate: [AuthGuard] , component:BrandsComponent},
  {path:'branddetails/:ID' , canActivate: [AuthGuard] , component:BrnaddetailsComponent},
  {path:'productdetails/:id' , canActivate: [AuthGuard] , component:ProductdetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

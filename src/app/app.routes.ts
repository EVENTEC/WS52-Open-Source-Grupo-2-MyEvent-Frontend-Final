import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { ProductdetailsComponent } from './component/pages/productdetails/productdetails.component';
import { CheckoutComponent } from './component/pages/checkout/checkout.component';
import {ContactComponent} from "./component/pages/contact/contact.component";
import {OthersComponent} from "./component/test/others/others.component";
import {ThePaymentViewComponent} from "./component/payment_view/the-payment-view/the-payment-view.component";
import {MapsComponent} from "./component/external/maps/maps.component";
import {LoginComponent} from "./component/login-register/login/login.component";
import {RegisterComponent} from "./component/login-register/register/register.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {AuthGuard} from "@angular/fire/auth-guard";


export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'others', component: OthersComponent },
  { path: 'payment', component: ThePaymentViewComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
];

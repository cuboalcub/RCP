import { Routes } from '@angular/router';


import { LandingComponent } from '../landing/landing.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"", component: LandingComponent},
    {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent }, // Ruta para el componente de registro

];

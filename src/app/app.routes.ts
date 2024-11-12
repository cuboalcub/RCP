import { Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent }, // Ruta para el componente de registro
];

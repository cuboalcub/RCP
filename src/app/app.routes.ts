import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { RcViewerComponent } from './rc-viewer/rc-viewer.component';

export const routes: Routes = [
    {path:"home", component: HomeComponent},
    {path:"", component: LandingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent }, 
    {path: 'create', component: CreateTableComponent },
    {path: 'edit', component: EditTableComponent},
    { path: "rc", component: RcViewerComponent }
];

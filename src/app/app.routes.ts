import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTableComponent } from './create-table/create-table.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },           // Ruta para Home
    { path: 'create', component: CreateTableComponent }  // Ruta para CreateTableComponent
];

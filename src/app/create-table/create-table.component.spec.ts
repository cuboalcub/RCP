import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-table',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importa CommonModule aquí
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent {
  rows = [{ actividad: '', mp: '', o: '', p: '' }];
}

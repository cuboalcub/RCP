import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common'; // Importa Location
import { EditTableService } from '../services/edit-table.service'; // Importa el servicio
import { Actividad } from '../models/actividades';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-table.component.html',
})
export class EditTableComponent {
  rows: Actividad[] = [
    {  o: 0, mp: 0, p: 0, pert: 0, precedentes: [] },
  ];

  actividades: string[] = [];

  constructor(private location: Location) {
    
  }

  goBack(): void {
    
  }

  updateActividades(): void {
    
  }

  addRow(): void {
    
  }

  removeRow(index: number): void {
    
  }

  calculatePERT(row: Actividad) {
    
  }

  onNombreChange(): void {
  }

  onPrecedentesChange(row: Actividad, selected: string[]): void {
    
  }

  saveData() {
    
  }

  togglePrecedente(row: any, option: string): void {
    
  }

  filteredActividades(row: any) {
    
  }
}

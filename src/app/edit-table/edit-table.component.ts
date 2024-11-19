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
    { nombre: '', o: 0, mp: 0, p: 0, pert: 0, precedentes: [] },
  ];

  actividades: string[] = [];

  constructor(private location: Location) {
    this.updateActividades();
  }

  goBack(): void {
    this.location.back(); // Navegar a la página anterior
  }

  updateActividades(): void {
    this.actividades = this.rows.map((row) => row.nombre).filter((a) => a);
  }

  addRow(): void {
    this.rows.push({ nombre: '', mp: 0, o: 0, p: 0, pert: 0, precedentes: [] });
    this.updateActividades();
  }

  removeRow(index: number): void {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
      this.updateActividades();
    }
  }

  calculatePERT(row: Actividad): number {
    return (row.o + 4 * row.mp + row.p) / 6;
  }

  onNombreChange(): void {
    this.updateActividades();
  }

  onPrecedentesChange(row: Actividad, selected: string[]): void {
    row.precedentes = selected;
    console.log(`Precedentes de ${row.nombre} actualizados:`, row.precedentes);
  }

  saveData(): void {
    this.rows.forEach((row) => {
      row.pert = this.calculatePERT(row);
    });
    console.log('Datos guardados:', this.rows);
  }

  togglePrecedente(row: any, option: string): void {
    const index = row.precedentes.indexOf(option);
    if (index === -1) {
      row.precedentes.push(option);
    } else {
      row.precedentes.splice(index, 1);
    }
  }

  filteredActividades(row: any): string[] {
    return this.actividades.filter((actividad) => actividad !== row.nombre);
  }
}

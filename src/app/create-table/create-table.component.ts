import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Actividad } from '../models/actividades';

@Component({
  selector: 'app-create-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-table.component.html',
})
export class CreateTableComponent {
  rows: Actividad[] = [
    { nombre: '', o:0, mp: 0, p: 0, pert: 0, precedentes: [] },
  ];

  actividades: string[] = [];

  constructor() {
    this.updateActividades();
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

  /**
   * Actualiza el array de precedentes cuando se seleccionan múltiples opciones
   * @param row - La fila que se está actualizando
   * @param selected - Las opciones seleccionadas
   */
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

  togglePrecedente(row: any, option: string) {
    const index = row.precedentes.indexOf(option);
    if (index === -1) {
      row.precedentes.push(option); // Agregar si no está en la lista
    } else {
      row.precedentes.splice(index, 1); // Quitar si ya está seleccionado
    }
  }

  filteredActividades(row: any) {
    return this.actividades.filter((actividad) => actividad !== row.nombre);
  }
  
}

import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades';

@Injectable({
  providedIn: 'root',
})
export class EditTableService {
  private rows: Actividad[] = [
    { nombre: '', o: 0, mp: 0, p: 0, pert: 0, precedentes: [] },
  ];

  getRows(): Actividad[] {
    return this.rows;
  }

  addRow(): void {
    this.rows.push({ nombre: '', o: 0, mp: 0, p: 0, pert: 0, precedentes: [] });
  }

  removeRow(index: number): void {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
    }
  }

  calculatePERT(row: Actividad): number {
    return (row.o + 4 * row.mp + row.p) / 6;
  }

  saveData(): void {
    this.rows.forEach((row) => {
      row.pert = this.calculatePERT(row);
    });
    console.log('Datos guardados:', this.rows);
  }
}

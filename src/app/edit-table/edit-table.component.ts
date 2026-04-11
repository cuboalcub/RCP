import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Actividad, Proyecto } from '../models/actividades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-table.component.html',
  styleUrl: './edit-table.component.css'
})
export class EditTableComponent {

  actividadesNombres: string[] = [];
  proyecto: Proyecto = {
    nombre: '',
    actividades: {}
  };
  oldkey: string = "";

  constructor(private lo: Location, private router: Router) { }

  ngOnInit(): void {
    // Mock data para poder navegar sin API
    this.proyecto = {
      nombre: 'Proyecto de Ejemplo',
      actividades: {
        'A': { o: 2, mp: 4, p: 6, pert: 4, precedentes: [] },
        'B': { o: 1, mp: 3, p: 5, pert: 3, precedentes: ['A'] },
      }
    };
    this.updateActividadesNombres();
  }

  goBack(): void {
    localStorage.removeItem('proyecto');
    this.proyecto = { nombre: '', actividades: {} };
    this.updateActividadesNombres();
    this.lo.back();
  }

  updateActividadesNombres(): void {
    if (this.proyecto.actividades) {
      this.actividadesNombres = Object.keys(this.proyecto.actividades);
    }
  }

  key(key: string) {
    this.oldkey = key;
  }

  onNombreChange(newKey: string): void {
    this.proyecto.actividades[newKey] = this.proyecto.actividades[this.oldkey];
    delete this.proyecto.actividades[this.oldkey];
    this.updateActividadesNombres();
  }

  addRow(): void {
    const key = "A" + Object.keys(this.proyecto.actividades).length.toString();
    this.proyecto.actividades[key] = {
      o: 0,
      mp: 0,
      p: 0,
      pert: 0,
      precedentes: [],
    };
    this.updateActividadesNombres();
  }

  removeRow(key: string): void {
    if (Object.keys(this.proyecto.actividades).length <= 1) {
      alert('No puedes eliminar la última actividad.');
      return;
    }
    delete this.proyecto.actividades[key];
    this.updateActividadesNombres();
  }

  calculatePERT(actividad: Actividad, key: string): number {
    const numero = (actividad.o + 4 * actividad.mp + actividad.p) / 6;
    const decimales = 2;
    const redondeado = Math.round(numero * Math.pow(10, decimales)) / Math.pow(10, decimales);
    this.proyecto.actividades[key].pert = redondeado;
    return this.proyecto.actividades[key].pert;
  }

  onPrecedentesChange(key: string, selected: string[]): void {
    this.proyecto.actividades[key].precedentes = selected;
    console.log(`Precedentes de ${key} actualizados:`, selected);
  }

  saveData(): void {
    const actividades = Object.values(this.proyecto.actividades);
    if (this.proyecto.nombre == null || this.proyecto.nombre === '') {
      alert('El nombre del proyecto no puede estar vacío.');
      return;
    }
    const invalidActividades = actividades.filter(
      (actividad) =>
        actividad.o === null ||
        actividad.o < 0 ||
        actividad.mp === null ||
        actividad.mp < 0 ||
        actividad.p === null ||
        actividad.p < 0
    );

    if (invalidActividades.length > 0) {
      alert('Todos los campos deben tener valores válidos (mayores o iguales a 0).');
      return;
    }
    console.log('Datos editados del proyecto:', this.proyecto);
    alert('Actividad editada correctamente');
    this.router.navigate(['/home']);
  }

  togglePrecedente(actividad: Actividad, option: string): void {
    const index = actividad.precedentes.indexOf(option);
    if (index === -1) {
      actividad.precedentes.push(option);
    } else {
      actividad.precedentes.splice(index, 1);
    }
  }

  filteredActividades(key: string): string[] {
    return this.actividadesNombres.filter((nombre) => nombre !== key);
  }
}

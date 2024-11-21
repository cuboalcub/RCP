import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Actividad, Proyecto } from '../models/actividades';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-table.component.html',
})
export class CreateTableComponent {
  proyecto: Proyecto = {
    id: 1,
    nombre: 'Nuevo Proyecto',
    actividades: {},
  };

  nombre: string = 'X'; // Nombre del proyecto por defecto
  actividadesNombres: string[] = []; // Lista de nombres de actividades para precedentes

  constructor(private location: Location) {
    this.updateActividadesNombres();
  }

  // Navegar hacia atrás
  goBack(): void {
    this.location.back();
  }

  // Actualiza la lista de nombres de actividades
  updateActividadesNombres(): void {
    this.actividadesNombres = Object.keys(this.proyecto.actividades);
  }

  // Agrega una nueva actividad al proyecto
  addRow(): void {
    const id = `Actividad${this.actividadesNombres.length + 1}`;
    this.proyecto.actividades[id] = {
      o: 0,
      mp: 0,
      p: 0,
      pert: 0,
      precedentes: [],
    };
    this.updateActividadesNombres();
  }

  // Elimina una actividad por su clave
  removeRow(key: string): void {
    delete this.proyecto.actividades[key];
    this.updateActividadesNombres();
  }

  // Calcula el valor PERT para una actividad
  calculatePERT(actividad: Actividad): number {
    return (actividad.o + 4 * actividad.mp + actividad.p) / 6;
  }

  // Manejo de precedentes en una actividad
  onPrecedentesChange(key: string, selected: string[]): void {
    this.proyecto.actividades[key].precedentes = selected;
    console.log(`Precedentes de ${key} actualizados:`, selected);
  }

  // Guardar datos del proyecto
  saveData(): void {
    const actividades = Object.values(this.proyecto.actividades);
    const invalidActividades = actividades.filter(
      (actividad) =>
        actividad.o === null || actividad.mp === null || actividad.p === null
    );

    if (invalidActividades.length > 0) {
      alert('Todos los campos obligatorios deben estar llenos.');
      return;
    }

    console.log('Datos guardados del proyecto:', this.proyecto);
  }

  // Alterna el estado de un precedente en la actividad
  togglePrecedente(actividad: Actividad, option: string): void {
    const index = actividad.precedentes.indexOf(option);
    if (index === -1) {
      actividad.precedentes.push(option);
    } else {
      actividad.precedentes.splice(index, 1);
    }
  }

  // Filtra las actividades para evitar precedentes circulares
  filteredActividades(key: string): string[] {
    return this.actividadesNombres.filter((nombre) => nombre !== key);
  }
}

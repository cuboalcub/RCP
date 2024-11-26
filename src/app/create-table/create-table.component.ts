import { CreateService } from '../services/create.service';
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
    nombre: '',
    actividades: {},
  };

  actividadesNombres: string[] = []; 
  
  oldkey: string = "";
  constructor(private location: Location, private createService: CreateService, )  {}

  // Método correcto del ciclo de vida de Angular
  ngOnInit(): void {
    const key = Object.keys(this.proyecto.actividades).length.toString();
    this.proyecto.actividades[key] = {
      o: 0,
      mp: 0,
      p: 0,
      pert: 0,
      precedentes: [],
    };
    this.updateActividadesNombres();

    console.log(this.proyecto);
  }

  // Navegar hacia atrás
  goBack(): void {
    this.location.back();
  }

  // Actualiza la lista de nombres de actividades
  updateActividadesNombres(): void {
    this.actividadesNombres = Object.keys(this.proyecto.actividades);
    
  }

  key(key:string){
    this.oldkey = key;
  }

// Método para manejar el cambio de nombre de una actividad
onNombreChange(newKey: string): void {
  if (newKey !== this.oldkey && newKey.trim() !== '') {
    this.proyecto.actividades[newKey] = this.proyecto.actividades[this.oldkey];
    delete this.proyecto.actividades[this.oldkey];
    this.updateActividadesNombres();
  }
}



  // Agrega una nueva actividad al proyecto
  addRow(): void {
    const key = "A"+Object.keys(this.proyecto.actividades).length.toString();
    this.proyecto.actividades[key] = {
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
  // Verificar si solo hay una actividad
  if (Object.keys(this.proyecto.actividades).length <= 1) {
    alert('No puedes eliminar la última actividad.');
    return;
  }

  // Eliminar la actividad y actualizar la lista
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

  saveData(): void {
    const actividades = Object.values(this.proyecto.actividades);
    if (this.proyecto.nombre == null){
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
    console.log('Datos guardados del proyecto:', this.proyecto);
    this.createService.create(this.proyecto).subscribe(
      () => {
        alert('Proyecto creado con éxito');
        this.location.back();
      },
      (error) => {
        alert('Error al crear el proyecto');
        console.error(error);
      }
    );
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

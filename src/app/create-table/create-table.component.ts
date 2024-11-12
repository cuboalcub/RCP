import { Component } from '@angular/core';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent {
  rows = [{ actividad: '', mp: '', o: '', p: '' }];  // Modelo para las filas de la tabla

  addRow() {
    this.rows.push({ actividad: '', mp: '', o: '', p: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  saveData() {
    console.log('Datos guardados:', this.rows);
    // Aquí puedes enviar los datos a un servidor o hacer lo que necesites con ellos
  }
}

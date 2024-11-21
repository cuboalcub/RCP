import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  menuVisible = false;
  datosTabla = [
    {
      nombre: "Nombre 1",
      optimo: "Valor 1",
      probable: "Valor 2",
      pesimo: "Valor 3"
    },
    {
      nombre: "Nombre 2",
      optimo: "Valor 4",
      probable: "Valor 5",
      pesimo: "Valor 6"
    }
  ];

  goedit(nombre: string): void {
    this.router.navigate(['edit', nombre]);
  }

  gocreate(): void {
    this.router.navigate(['create']);
  }

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('document:click')
  closeMenu(): void {
    this.menuVisible = false;
  }

  logOut(): void {
    localStorage.removeItem('userSession');
    alert('Has cerrado sesión.');
    window.location.href = '/'; // Redirigir al inicio tras cerrar sesión
  }


  eliminarElemento(elemento: any) {
    const index = this.datosTabla.indexOf(elemento);
    if (index > -1) {
      this.datosTabla.splice(index, 1);
      console.log('Elemento eliminado:', elemento);
    }
  }

}
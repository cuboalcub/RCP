import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Project } from '../models/project/project.modelo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  datosTabla: Project[] = [
    { id: 1, nombre: 'Proyecto Alpha' },
    { id: 2, nombre: 'Proyecto Beta' },
  ];

  menuVisible = false;

  constructor(private router: Router) { }

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
    localStorage.clear();
    alert('Has cerrado sesión.');
    this.router.navigate(['']);
  }

  eliminarElemento(elemento: any) {
    const index = this.datosTabla.indexOf(elemento);
    if (index > -1) {
      this.datosTabla.splice(index, 1);
    }
  }

  goEdit(id: number) {
    localStorage.setItem('proyecto', id.toString());
    this.router.navigate(['edit']);
  }

  viewRCP(id: number) {
    localStorage.setItem('proyecto', id.toString());
    this.router.navigate(['rc']);
  }

  goDelete(id: number) {
    const el = this.datosTabla.find((e) => e.id === id);
    if (el) {
      this.eliminarElemento(el);
    }
  }
}
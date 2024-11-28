  import { Component, HostListener } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Router } from '@angular/router';
  import { HomeService } from '../services/home.service';
  import { Project } from '../models/project/project.modelo';
  @Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
  })
  export class HomeComponent {
    datosTabla: Project[] = [];
    constructor(private router: Router, private homeService: HomeService) { }

    
      ngOnInit() {
        this.reloadCurrentRoute();
        if (!localStorage.getItem('authToken')) {
          this.router.navigate(['']);
        }
        this.viewTable();
      }

    viewTable() {
      this.homeService.viewTable().subscribe({
        next: (datos) => {
          this.datosTabla = datos;
          console.log('Tabla de proyectos cargada');
        },  
        error: (err) => {
          console.error('Error al cargar la tabla de proyectos:', err);
        },  
      });  
    }    
    menuVisible = false;

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
      this.homeService.logoutBackend();
      alert('Has cerrado sesión.');
      this.router.navigate(['']);
    }


    eliminarElemento(elemento: any) {
      const index = this.datosTabla.indexOf(elemento);
      if (index > -1) {
        this.datosTabla.splice(index, 1);
        console.log('Elemento eliminado:', elemento);
      }
    }
    goEdit(id: number) {
    localStorage.setItem('proyecto', id.toString());
    this.router.navigate(['edit']);
    }

    reloadCurrentRoute() {
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate([this.router.url]);
      });
    }
    
    viewRCP(id: number) {
      localStorage.setItem('proyecto', id.toString());
      this.router.navigate(['rc']);
    }
    
    goDelete(id: number) {
      this.homeService.deleteProject(id.toString()).subscribe({
        next: () => {
          this.eliminarElemento(this.datosTabla.find((elemento) => elemento.id === id));
        },
        error: (err) => {
          console.error('Error al eliminar el proyecto:', err);
        }
      });
      
    }
    
  }
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project/project.modelo';
import { HomeService } from '../services/home.service';import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  ngOnInit() {
    this.homeService.viewTable()
  }
}

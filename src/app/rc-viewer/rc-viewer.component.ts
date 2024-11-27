import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rc-viewer',
  templateUrl: './rc-viewer.component.html',
})
export class RcViewerComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { FormCanvasComponent } from '../../form-canvas/form-canvas.component';

@Component({
  selector: 'app-main',
  imports: [FormCanvasComponent],
  template: `
  <div style="padding: .5rem;">
  <app-form-canvas />
  </div>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

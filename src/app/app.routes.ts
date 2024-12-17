import { Routes } from '@angular/router';
import { FormCanvasComponent } from './form-canvas/form-canvas.component';

export const routes: Routes = [
{
  path: '',
  loadComponent: () => import('./form-canvas/form-canvas.component').then(m => m.FormCanvasComponent),
}
];

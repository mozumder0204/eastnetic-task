import { NgModule } from '@angular/core';
import { DrawService } from './draw.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { DrawingRectangleComponent } from './drawing-rectangle/drawing-rectangle.component';

export const routes = [
  { path: '', component: DrawingRectangleComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [DrawingRectangleComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [DrawService],
})
export class DrawModule {}

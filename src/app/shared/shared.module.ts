import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemnuComponent } from './sidemnu/sidemnu.component';

@NgModule({
  declarations: [
    SidemnuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidemnuComponent,
  ]
})
export class SharedModule { }

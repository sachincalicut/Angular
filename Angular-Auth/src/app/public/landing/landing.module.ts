import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class LandingModule { }

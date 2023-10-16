import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: PublicComponent, children:[
    {path:'', component: LandingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

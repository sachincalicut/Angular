import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./public/public.module').then((m) => m.PublicModule)},
  {path: 'login', component: LoginComponent},
  {path: 'admin', loadChildren: ()=> import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate: [authGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'' ,redirectTo:'/login', pathMatch:'full'},
  {
    path: 'admin',
canActivate:[AuthGuard],
 loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
 /*  {
    path:'admin',
    loadChildren:() => import(('./modules/admin/admin.module')).then(m =>m.AdminModule)
  }, */
  {path:'**' ,component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

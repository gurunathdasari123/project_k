import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [ {path:'',component:MainpageComponent,
children:[
  {path:'transaction',component:TransactionComponent},
  {path:'home',component:HomeComponent},
  {path:'history',component:HistoryComponent},
  {path:'',redirectTo:'admin/home',pathMatch:'full'

  }]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

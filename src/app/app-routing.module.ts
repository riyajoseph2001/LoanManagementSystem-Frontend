import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from 'src/app/customers/customers.component'
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  //Lazy Loading
  {
    path: 'customers',
    component: CustomersComponent,
    loadChildren: () => import('./customers/customers.module').then(x=>x.CustomersModule)
  },
  //shared
  {
    path: 'shared',
    component: SharedComponent,
    loadChildren: () => import('./shared/shared.module').then(x=>x.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

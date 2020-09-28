import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  }, 
  { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) 
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

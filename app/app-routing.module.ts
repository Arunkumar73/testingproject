import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'mainframe', loadChildren: () => import('./mainframe/mainframe.module').then(m => m.MainframeModule) },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
{ path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

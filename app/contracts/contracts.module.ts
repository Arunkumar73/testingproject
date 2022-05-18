import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { ViewContractComponent } from './view-contract/view-contract.component';


@NgModule({
  declarations: [
    ContractsComponent,
    AddContractComponent,
    EditContractComponent,
    ViewContractComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ]
})
export class ContractsModule { }

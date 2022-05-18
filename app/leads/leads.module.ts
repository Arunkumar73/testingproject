import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { EditLeadsComponent } from './edit-leads/edit-leads.component';
import { ViewLeadsComponent } from './view-leads/view-leads.component';


@NgModule({
  declarations: [
    LeadsComponent,
    AddLeadsComponent,
    EditLeadsComponent,
    ViewLeadsComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule
  ]
})
export class LeadsModule { }

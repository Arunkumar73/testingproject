import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MainframeRoutingModule } from './mainframe-routing.module';
import { MainframeComponent } from './mainframe.component';


@NgModule({
  declarations: [
    MainframeComponent
  ],
  imports: [
    CommonModule,
    MainframeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainframeModule { }

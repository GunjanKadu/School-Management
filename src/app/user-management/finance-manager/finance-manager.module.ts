import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { FinanceManagerRoutingModule } from './finance-manager-routing.module';
import { FinanceManagerFormComponent } from './finance-manager-form/finance-manager-form.component';
import { FinanceManagerListComponent } from './finance-manager-list/finance-manager-list.component';
import { FinanceManagerDetailsComponent } from './finance-manager-details/finance-manager-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceManagerRoutingModule,
    NgxPaginationModule
  ],
  declarations: [FinanceManagerFormComponent, FinanceManagerListComponent, FinanceManagerDetailsComponent]
})
export class FinanceManagerModule { }

import { NgModule } from '@angular/core';
import { AdvancedEmployeeListComponent } from './advanced-employee-list.component';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout/flex';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterModule],
  declarations: [AdvancedEmployeeListComponent],
  providers: [],
  exports: [AdvancedEmployeeListComponent]
})
export class AdvancedEmployeeListComponentModule {
}

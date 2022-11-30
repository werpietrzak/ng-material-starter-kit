import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { RouterModule } from "@angular/router";
import { SortedProductListComponent } from "./sorted-product-list.component";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterModule],
  declarations: [SortedProductListComponent],
  providers: [],
  exports: [SortedProductListComponent]
})
export class SortedProductListComponentModule {
}

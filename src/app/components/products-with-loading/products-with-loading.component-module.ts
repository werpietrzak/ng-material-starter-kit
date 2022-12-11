import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsWithLoadingComponent } from './products-with-loading.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [ProductsWithLoadingComponent],
  providers: [],
  exports: [ProductsWithLoadingComponent]
})
export class ProductsWithLoadingComponentModule {
}

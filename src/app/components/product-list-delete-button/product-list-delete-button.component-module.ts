import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductListDeleteButtonComponent } from './product-list-delete-button.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductListDeleteButtonComponent],
  providers: [],
  exports: [ProductListDeleteButtonComponent]
})
export class ProductListDeleteButtonComponentModule {}

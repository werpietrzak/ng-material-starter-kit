import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CartComponent } from './cart.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CartComponent],
  providers: [],
  exports: [CartComponent]
})
export class CartComponentModule {
}

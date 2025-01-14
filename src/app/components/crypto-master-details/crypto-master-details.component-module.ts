import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoMasterDetailsComponent } from './crypto-master-details.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [CryptoMasterDetailsComponent],
  providers: [],
  exports: [CryptoMasterDetailsComponent]
})
export class CryptoMasterDetailsComponentModule {
}

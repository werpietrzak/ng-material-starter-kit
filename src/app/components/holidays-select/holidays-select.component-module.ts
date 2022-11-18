import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidaysSelectComponent } from './holidays-select.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [HolidaysSelectComponent],
  providers: [],
  exports: [HolidaysSelectComponent]
})
export class HolidaysSelectComponentModule {
}

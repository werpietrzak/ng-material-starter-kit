import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UniversitySearchComponent } from './university-search.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [UniversitySearchComponent],
  providers: [],
  exports: [UniversitySearchComponent]
})
export class UniversitySearchComponentModule {
}

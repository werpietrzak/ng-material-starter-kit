import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterUserComponent } from './register-user.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule],
  declarations: [RegisterUserComponent],
  providers: [],
  exports: [RegisterUserComponent]
})
export class RegisterUserComponentModule {
}

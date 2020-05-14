import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  exports: [MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule],
})
export class MaterialModule {}

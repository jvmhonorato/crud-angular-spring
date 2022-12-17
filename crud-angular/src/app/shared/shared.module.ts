import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { CategoryPipe } from './pipes/category.pipe';





@NgModule({
  declarations: [

    ErrorDialogComponent,
     CategoryPipe
  ],
  imports:[
    AppMaterialModule,
    CommonModule
  ],
  exports:[ErrorDialogComponent,
  CategoryPipe
  ]
})

export class SharedModule { }

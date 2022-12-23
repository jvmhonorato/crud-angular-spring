import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfimationDialogComponent } from './components/confimation-dialog/confimation-dialog.component';





@NgModule({
  declarations: [

    ErrorDialogComponent,
     CategoryPipe,
     ConfimationDialogComponent
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

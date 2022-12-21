import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './container/courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesFormComponent } from './container/courses-form/courses-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
    CoursesListComponent
  ],
  imports: [

    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }

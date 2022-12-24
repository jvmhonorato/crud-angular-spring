import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CourseTs } from '../../model/course.ts';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id:[''],
    name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    category: ['',[Validators.required]]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ){
   // this.form
  }


    ngOnInit(): void {
      //grab currenty values from data base to set in update fields
      const course: CourseTs = this.route.snapshot.data['course']
      this.form.setValue({
        _id:course._id,
        name:course.name,
        category:course.category
      })
    }

    onSubmit(){
      this.service.save(this.form.value)
      .subscribe({
        next:(data) =>  this.onSuccess(),
        error: () => this.onError()
      })
    }

    onCancel(){
      this.location.back();
    }

    private onSuccess() {
      this._snackBar.open('Curso criado com sucesso!','',
      {duration:  3000});
      this.onCancel();
    }

    private onError() {
      this._snackBar.open('Erro ao salvar curso!','',
      {duration:  3000})
    }
}

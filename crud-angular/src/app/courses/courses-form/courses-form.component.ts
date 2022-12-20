import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  durationInSeconds = 5;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
    ){
    this.form = this.formBuilder.group({
      name:[null],
      category: [null]
    })
  }


    ngOnInit(): void {

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

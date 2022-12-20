import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
    ){
    this.form = this.formBuilder.group({
      name:[null],
      category: [null]
    })
  }


    ngOnInit(): void {

    }

    onSubmit(){
      this.service.save(this.form.value).subscribe({
        next:(data) =>  console.log(data),
        error: () => this.onError()
      })
    }

    onCancel(){
      console.log('onCancel')
    }

    private onError() {
      this._snackBar.open('Erro ao salvar curso','',
      {duration:  3000})
    }
}

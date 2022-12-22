import { CourseTs } from './../model/course.ts';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly  API = 'api/courses'

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog

    ) { }
  list()  {
     return this.httpClient.get<CourseTs[]>(this.API)
     .pipe(
     catchError(error => {
      console.log('Erro ao carregar cursos')
      this.onError('Erro ao carregar cursos')
      return of([])
     })
     )
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  loadById(id: string){
   return this.httpClient.get<CourseTs>(`${this.API}/${id}`)
  }

  // conditional to create or update data
  save(record: Partial<CourseTs>){
    console.log(record)
    if(record._id){
      console.log('update')
      return this.update(record)
    }
    console.log('create')
   return this.create(record)
  }

  private create(record: Partial<CourseTs>) {
      return this.httpClient.post<CourseTs>(this.API, record).pipe(first())
  }

  private update(record: Partial<CourseTs>){
    return this.httpClient.put<CourseTs>(`${this.API}/${record._id}`, record).pipe(first())
  }

     remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first())
  }
}

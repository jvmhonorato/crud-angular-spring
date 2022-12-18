
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';
import { CourseTs } from '../model/course.ts';
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
}

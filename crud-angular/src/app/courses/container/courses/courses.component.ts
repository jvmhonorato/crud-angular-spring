import { CourseTs } from './../../model/course.ts';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CoursesService } from '../../services/courses.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses$:Observable<CourseTs[]> | null = null
  displayedColumns = ['_id','name', 'category', 'actions'];


  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private  route: ActivatedRoute,
    private _snackBar: MatSnackBar
    ){

      this.refresh()


  }

  refresh(){
    this.courses$ = this.coursesService.list()
    .pipe(  );
  }

  onError(errorMsg:string){
    this.dialog.open(ErrorDialogComponent,{
       data:errorMsg
    })
  }


ngOnInit(): void {


}
onAdd(){
  this.router.navigate([ 'new'], {relativeTo: this.route})
}
onEdit(course: CourseTs){
  this.router.navigate([ 'edit', course._id], {relativeTo: this.route})
}
onRemove(course: CourseTs){
  this.coursesService.remove(course._id).subscribe({
    next:() => {
      this.refresh()
      this._snackBar.open('Curso removido com sucesso!','X',
      {duration:  3000, verticalPosition: 'top', horizontalPosition: 'center'});

    },
     error:() => this.onError('Deu ruim, error ao remover o curso')


  })}

}

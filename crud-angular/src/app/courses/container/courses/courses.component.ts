import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../services/courses.service';
import { CourseTs } from '../../model/course.ts';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses$:Observable<CourseTs[]>;
  displayedColumns = ['_id','name', 'category', 'actions'];


  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private  route: ActivatedRoute
    ){

    this.courses$ = this.coursesService.list()
    .pipe(  );


  }

ngOnInit(): void {


}
onAdd(){
  this.router.navigate([ 'new'], {relativeTo: this.route})
}
onEdit(course: CourseTs){
  this.router.navigate([ 'edit', course._id], {relativeTo: this.route})
}

}

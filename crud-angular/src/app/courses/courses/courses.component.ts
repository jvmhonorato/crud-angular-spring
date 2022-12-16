import { CoursesService } from './../services/courses.service';
import { CourseTs } from './../model/course.ts';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses:Observable<CourseTs[]>;
  displayedColumns = ['name', 'category'];


  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService){
    //this.courses = [];
    //this.coursesService = new CoursesService
    this.courses = this.coursesService.list();

    //this.coursesService.list().subscribe(courses => this.courses = courses);
  }
ngOnInit(): void {


}

}

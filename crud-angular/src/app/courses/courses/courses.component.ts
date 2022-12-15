import { CourseTs } from './../model/course.ts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses:CourseTs[] = []
  constructor(){
    //this.courses = [];
  }
ngOnInit(): void {

}

}

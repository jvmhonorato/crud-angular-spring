import { ActivatedRoute, Router } from '@angular/router';
import { CourseTs } from '../../model/course.ts';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: CourseTs[] = [];
  @Output() add = new EventEmitter(false)

  readonly displayedColumns = ['_id','name', 'category', 'actions'];

  constructor(


    ){}

    onAdd(){
      this.add.emit(true)
    }
}

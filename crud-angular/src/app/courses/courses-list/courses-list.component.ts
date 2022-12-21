import { ActivatedRoute, Router } from '@angular/router';
import { CourseTs } from './../model/course.ts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: CourseTs[] = []
  readonly displayedColumns = ['_id','name', 'category', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute

    ){}

    onAdd(){
      this.router.navigate([ 'new'], {relativeTo: this.route})
    }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CourseTs } from '../model/course.ts';
import { CoursesService } from '../services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<CourseTs> {

  constructor(private service: CoursesService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseTs> {
   if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
   }
    return of({_id:'', name:'',category:''});
  }
}

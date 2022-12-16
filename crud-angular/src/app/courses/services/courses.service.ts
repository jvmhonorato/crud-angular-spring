import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseTs } from '../model/course.ts';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }
  list(): CourseTs[]  {
     return [
      {_id:'1',name:'Angular', category:'Front-end'}
     ];
  }
}

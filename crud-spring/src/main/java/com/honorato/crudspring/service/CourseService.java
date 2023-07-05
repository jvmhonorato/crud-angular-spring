package com.honorato.crudspring.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import com.honorato.crudspring.dto.CourseDTO;
import com.honorato.crudspring.exception.RecordNotFoundExeption;
import com.honorato.crudspring.model.Course;
import com.honorato.crudspring.repository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CourseService {
    private final CourseRepository courseRepository;
    

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public  List<CourseDTO> list() {
        List<Course> courses = courseRepository.findAll();
        List<CourseDTO> dtos = new ArrayList<>(courses.size());
        for (Course course : courses) {
            
            CourseDTO dto =  new CourseDTO(course.getId(), course.getName() , course.getCategory());
            dtos.add(dto);
        }
        return dtos;
    }
    public Course findById(@PathVariable @NotNull @Positive Long id){
        return courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundExeption(id));
      
    }
    public Course create( @Valid Course course){
        return courseRepository.save(course);
          
   }
   public Course update( @NotNull @Positive Long id,  Course course) {
    return courseRepository
    .findById(id)
    .map(recordFound -> {
        recordFound.setName(course.getName());
        recordFound.setCategory(course.getCategory());
        return courseRepository.save(recordFound);
        
    }).orElseThrow(() -> new RecordNotFoundExeption(id));
    
 }
 public void delete(@PathVariable @NotNull @Positive Long id) {

    courseRepository.delete(courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundExeption(id)));

    /* courseRepository.findById(id).map(recordFound -> {
       courseRepository.deleteById(id);
        return true;
    })
    .orElseThrow(() -> new RecordNotFoundExeption(id));*/
 }
}

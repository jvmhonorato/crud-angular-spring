package com.honorato.crudspring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

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

    public  List<Course> list() {
        return courseRepository.findAll();
    }
    public Course findById(@PathVariable @NotNull @Positive Long id){
        return courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundExeption(id));
      
    }
    public Course create( @Valid Course course){
        return courseRepository.save(course);
          
   }
   public Optional<Course> update( @NotNull @Positive Long id,  Course course) {
    return courseRepository
    .findById(id)
    .map(recordFound -> {
        recordFound.setName(course.getName());
        recordFound.setCategory(course.getCategory());
        return courseRepository.save(recordFound);
        
    });
    
 }
 public boolean delete(@PathVariable @NotNull @Positive Long id) {
    return courseRepository.findById(id).map(recordFound -> {
       courseRepository.deleteById(id);
        return true;
    })
    .orElse(false);
 }
}

package com.honorato.crudspring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import com.honorato.crudspring.model.Course;
import com.honorato.crudspring.repository.CourseRepository;

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
    public Optional<Course> findById(@PathVariable @NotNull @Positive Long id){
        return courseRepository.findById(id);
      
    }
}

package com.honorato.crudspring.dto.mapper;

import org.springframework.stereotype.Component;

import com.honorato.crudspring.dto.CourseDTO;
import com.honorato.crudspring.model.Course;

@Component

public class CourseMapper {
    public CourseDTO toDTO(Course course) {
        return new CourseDTO(course.getId(), course.getName(), course.getCategory());
    }
}

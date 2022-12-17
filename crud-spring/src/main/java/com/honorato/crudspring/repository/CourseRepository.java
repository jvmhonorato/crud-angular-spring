package com.honorato.crudspring.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.honorato.crudspring.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course ,Long>  {
    

}

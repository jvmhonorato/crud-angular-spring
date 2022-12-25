package com.honorato.crudspring.controler;


import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.honorato.crudspring.model.Course;
import com.honorato.crudspring.repository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
@Validated
public class CourseController {


    private final CourseRepository courseRepository;

    //@ResquestMapping(method = ResquestMethod.GET)
    @GetMapping
    public @ResponseBody List<Course> list() {
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable @NotNull @Positive Long id){
        return courseRepository
        .findById(id)
        .map(recordFound -> ResponseEntity.ok().body(recordFound))
        .orElse(ResponseEntity.notFound().build());
    }


    
    //@ResquestMapping(method = ResquestMethod.GET)
        @PostMapping
        @ResponseStatus(code = HttpStatus.CREATED)
        public Course create(@RequestBody @Valid Course course){



           // System.out.println(course.getName());
            return courseRepository.save(course);
            //return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
    }



    @PutMapping("/{id}")
     public ResponseEntity<Course> update(@PathVariable @NotNull @Positive Long id, @RequestBody Course course) {
        return courseRepository
        .findById(id)
        .map(recordFound -> {
            recordFound.setName(course.getName());
            recordFound.setCategory(course.getCategory());
            Course updated = courseRepository.save(recordFound);
            return ResponseEntity.ok().body(updated);
        })
        .orElse(ResponseEntity.notFound().build());
     }
    
         @DeleteMapping("/{id}")
     public ResponseEntity<Void> delete(@PathVariable @NotNull @Positive Long id) {
        return courseRepository
        .findById(id)
        .map(recordFound -> {
           courseRepository.deleteById(id);
            return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
     }
    
}

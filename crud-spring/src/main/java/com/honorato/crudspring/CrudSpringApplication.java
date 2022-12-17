package com.honorato.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.honorato.crudspring.model.Course;
import com.honorato.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}


	@Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository) {
        return args -> {
          courseRepository.deleteAll();

		  Course c = new Course();
		  c.setName(" Angular com Spring ");
		  c.setCategory("Front-end");

		  courseRepository.save(c);


        };
    }
}

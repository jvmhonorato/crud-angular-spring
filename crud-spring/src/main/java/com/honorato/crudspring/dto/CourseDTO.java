package com.honorato.crudspring.dto;

import org.hibernate.validator.constraints.Length;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class CourseDTO {
    
    
    private Long _id;

    @NotBlank
    @NotNull 
    @Length(min =5,max = 100)
    
    private String name;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "back-end|front-end")
   
    private String category;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "Active|Inactive")
    
    private String status = "Active"; 
}

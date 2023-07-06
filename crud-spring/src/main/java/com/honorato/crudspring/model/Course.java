package com.honorato.crudspring.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.honorato.crudspring.enums.Category;
import com.honorato.crudspring.enums.converters.CategoryConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;



@Data
@Entity
//@Table(name = "cursos")
@SQLDelete(sql = "UPDATE Course SET status = 'Inactive' WHERE id = ?" )
@Where(clause = "status = 'Active'")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @NotBlank
    @NotNull 
    @Length(min =5,max = 100)
    @Column(length = 200, nullable = false)
    private String name;

    @NotNull
    //@Length(max = 10)
    //@Pattern(regexp = "back-end|front-end")
    @Column(length = 10, nullable = false)
    @Convert( converter = CategoryConverter.class)
    private Category category;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "Active|Inactive")
    @Column(length = 10, nullable = false)
    private String status = "Active"; 
}

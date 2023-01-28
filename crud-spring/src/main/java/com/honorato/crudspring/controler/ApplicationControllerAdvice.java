package com.honorato.crudspring.controler;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.honorato.crudspring.exception.RecordNotFoundExeption;

@RestControllerAdvice
public class ApplicationControllerAdvice {

    @ExceptionHandler(RecordNotFoundExeption.class)
    public String handleNotFoundException(RecordNotFoundExeption ex){
        return  ex.getMessage();
    };
}

package com.honorato.crudspring.enums.converters;

import com.honorato.crudspring.enums.Category;

import jakarta.persistence.AttributeConverter;

public class CategoryConverter implements AttributeConverter<Category, String> {

    @Override
    public String convertToDatabaseColumn(Category attribute) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'convertToDatabaseColumn'");
    }

    @Override
    public Category convertToEntityAttribute(String dbData) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'convertToEntityAttribute'");
    }
    
}

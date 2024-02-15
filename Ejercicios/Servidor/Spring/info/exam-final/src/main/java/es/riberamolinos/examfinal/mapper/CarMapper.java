package es.riberamolinos.examfinal.mapper;

import org.mapstruct.Mapper;

import es.riberamolinos.examfinal.dto.CarDto;
import es.riberamolinos.examfinal.entity.CarEntity;

@Mapper(componentModel = "spring")
public interface CarMapper {
    CarEntity toCarEntity (CarDto car);
    CarDto toCar (CarEntity car);
    
}

package com.example.demo.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.demo.dto.CoachDTO;
import com.example.demo.entity.CoachEntity;


//Se podria tener todo en un unico mapper
@Mapper(componentModel = "spring", uses = {PokemonMapper.class})
public interface CoachMapper {
	
	List<CoachDTO> coachDtoToCoach(List<CoachEntity> coach);
	CoachDTO coachDtoToCoach(CoachEntity coach);


}

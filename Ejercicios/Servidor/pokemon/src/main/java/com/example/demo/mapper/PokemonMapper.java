package com.example.demo.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.demo.dto.PokemonDTO;
import com.example.demo.entity.PokemonEntity;


//Se podria tener todo en un unico mapper
@Mapper(componentModel = "spring", uses = {CoachMapper.class})
public interface PokemonMapper {
	
	List<PokemonDTO> pokemonEntityToPokemonDto(List<PokemonEntity> pokemon);
	
	//Cuando recupero la informacion del entranador, no mapeo su lista de pokemon(ignore = true), debido a que produce un loop infinito.
    @Mapping(target = "coach.pokemon", ignore = true)
	PokemonDTO pokemonEntityToPokemonDto(PokemonEntity pokemon);
    
    
    PokemonEntity pokemonDtoToPokemonEntity(PokemonDTO pokemon);

    
    
}

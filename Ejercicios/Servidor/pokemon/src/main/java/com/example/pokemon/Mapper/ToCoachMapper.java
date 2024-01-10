package com.example.pokemon.Mapper;

import java.util.List;
import org.mapstruct.Mapper;
import com.example.pokemon.Entitys.CoachEntity;
import com.example.pokemon.Objetos.Coach;

@Mapper(componentModel = "Spring")
public interface ToCoachMapper {
    
    Coach toCoach (CoachEntity CoachEntity);
    List<Coach> ToPokemonList (List<CoachEntity> coachList); 
    CoachEntity toCoachEntity (Coach coach);
}

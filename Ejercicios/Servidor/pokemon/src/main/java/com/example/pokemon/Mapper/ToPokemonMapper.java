package com.example.pokemon.Mapper;

import java.util.List;
import org.mapstruct.Mapper;
import com.example.pokemon.Entitys.PokemonEntity;
import com.example.pokemon.Objetos.Pokemon;

@Mapper(componentModel = "Spring")
public interface ToPokemonMapper {

    Pokemon toPokemon (PokemonEntity pokemonEntity);
    List<Pokemon> ToPokemonList (List<PokemonEntity> pokemonList);
    PokemonEntity toPokemonEntity (Pokemon pokemon);

}

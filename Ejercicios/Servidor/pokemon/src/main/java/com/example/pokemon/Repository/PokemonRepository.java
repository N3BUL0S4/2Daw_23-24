package com.example.pokemon.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.pokemon.Entitys.PokemonEntity;

@Repository
public interface PokemonRepository extends JpaRepository<PokemonEntity, Long> {
    
}

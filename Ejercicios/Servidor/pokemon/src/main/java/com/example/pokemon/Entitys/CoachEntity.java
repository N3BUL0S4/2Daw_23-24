package com.example.pokemon.Entitys;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CoachEntity {

    @Id
    Long id;
    
    @Column(name="name")
    String name;

    @Column(name="town")
    String town;

    @Column(name="cap")
    Boolean cap;
    
    @OneToMany(mappedBy = "coach")
    private List<PokemonEntity> pokemons;
}
package com.example.pokemon.Objetos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Coach {

    Long id;
    String name;
    String town;
    Boolean cap;
    
}
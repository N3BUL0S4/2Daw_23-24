package com.example.pokemon.Objetos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Pokemon {
    Long id;
    
    String name;
    TYPE type;
    public enum TYPE { Acero, Agua, Bicho, Dragón, Eléctrico, Fantasma, Fuego, Hada, Hielo, Lucha, Normal, Planta, Psíquico, Roca, Siniestro, Tierra, Volador };
    Integer level;    
    Integer health;
    Integer healthMax;
    Long id_coach;
}

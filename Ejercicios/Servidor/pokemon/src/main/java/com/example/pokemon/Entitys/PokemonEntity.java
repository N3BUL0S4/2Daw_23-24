package com.example.pokemon.Entitys;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class PokemonEntity {

    @Id
    Long id;
    
    @Column(name="name")
    String name;
    @Column(name="type")
    TYPE type;
    public enum TYPE { Acero, Agua, Bicho, Dragón, Eléctrico, Fantasma, Fuego, Hada, Hielo, Lucha, Normal, Planta, Psíquico, Roca, Siniestro, Tierra, Volador };
    
    @Column(name="level")
    Integer level;    
    
    @Column(name="heath")
    Integer health;
    
    @Column(name="healthMax")
    Integer healthMax;
    
    @ManyToOne
    @JoinColumn(name="id_coach")
    private CoachEntity coach;
}

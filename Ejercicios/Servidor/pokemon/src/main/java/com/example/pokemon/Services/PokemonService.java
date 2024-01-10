package com.example.pokemon.Services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pokemon.Mapper.ToPokemonMapper;
import com.example.pokemon.Objetos.Pokemon;
import com.example.pokemon.Repository.PokemonRepository;



@Service
public class PokemonService {
    
    @Autowired ToPokemonMapper tpm;
    @Autowired PokemonRepository pkr;

    public Pokemon getPokemon(Long id) {
        if (pkr.existsById(id)) {
            return tpm.toPokemon(pkr.findById(id).get());
        }
        return null;
    }

    public List<Pokemon> getAllPokemons() {
        return tpm.ToPokemonList(pkr.findAll());
    }

    public List<Pokemon> getAllSavagePokemon() {
        List<Pokemon> pokemons=new ArrayList<>();
            for (Pokemon p : getAllPokemons()) {
                if (p.getId_coach()== null) {
                    pokemons.add(p);
                }
            }
        return pokemons;
    }

    public void newPokemon (Pokemon p) {
        pkr.save(tpm.toPokemonEntity(p));
    }
}

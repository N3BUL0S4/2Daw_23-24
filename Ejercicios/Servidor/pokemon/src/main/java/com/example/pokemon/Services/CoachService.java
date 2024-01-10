package com.example.pokemon.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pokemon.Mapper.ToCoachMapper;
import com.example.pokemon.Objetos.Coach;
import com.example.pokemon.Repository.CoachRepository;

@Service
public class CoachService {

    @Autowired ToCoachMapper tcm;
    @Autowired CoachRepository cr;

    public List<Coach> getAllCoachs () {
        return tcm.ToPokemonList(cr.findAll());
    }

    public Coach GetCoachByName(String name) {
        for (Coach c : getAllCoachs()) {
           if (c.getName()==name) {
            return c;
           } 
        }
        return null;
    }
}

package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.PokemonDTO;
import com.example.demo.entity.PokemonEntity;
import com.example.demo.mapper.PokemonMapper;
import com.example.demo.repository.CoachRepository;
import com.example.demo.repository.PokemonRepository;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository pokemonRepository;
	
	@Autowired
	private CoachRepository coachRepository;
	
	@Autowired
	private PokemonMapper pokemonMapper;
	
	public List<PokemonDTO> getAllPokemon(){
		return pokemonMapper.pokemonEntityToPokemonDto(pokemonRepository.findAll());
	}
	
	public List<PokemonDTO> getAllPokemonWild(){
		return pokemonMapper.pokemonEntityToPokemonDto(pokemonRepository.findByCoachId(null));
	}
	
	public List<PokemonDTO> getAllPokemonByCoachId(Long coachId){
		return pokemonMapper.pokemonEntityToPokemonDto(pokemonRepository.findAll());
	}
	
	public PokemonDTO getPokemonById(Long pokemonId) {
		return pokemonMapper.pokemonEntityToPokemonDto(pokemonRepository.findById(pokemonId).get());
	}
	
	public PokemonDTO createPokemon(PokemonDTO pokemonDTO) {
		PokemonEntity pokemonCreated =  pokemonRepository.save(pokemonMapper.pokemonDtoToPokemonEntity(pokemonDTO));
		return pokemonMapper.pokemonEntityToPokemonDto(pokemonCreated);
	}
	
	public boolean associatePokemonWildWithCoach(Long idPokemon, Long idCoach){
		//Recupero  el pokemon salvaje
		PokemonEntity pokemon =  pokemonRepository.findById(idPokemon).get();
		
		//validacion - Si tiene coach asociado significa que no es salvaje
		if(pokemon.getCoach() != null) {
			return false;
		}
		else {
			pokemon.setCoach(coachRepository.findById(idCoach).get());
			pokemonRepository.save(pokemon);
			return true;
		}
	}
	
	public boolean disassociatePokemonWithCoach(Long idPokemon){
		PokemonEntity pokemon = pokemonRepository.findById(idPokemon).get();
		pokemon.setCoach(null);
		return pokemonRepository.save(pokemon).getCoach() == null? true : false;
	}
		
}

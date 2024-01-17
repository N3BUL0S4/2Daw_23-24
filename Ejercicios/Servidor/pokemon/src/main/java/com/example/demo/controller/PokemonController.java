package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CoachDTO;
import com.example.demo.dto.PokemonDTO;
import com.example.demo.service.CoachService;
import com.example.demo.service.PokemonService;

@RestController
public class PokemonController {
	
	
	//Se podria tener un solo service, incluso un solo mapper. No es obligatorio tenerlo separado.
	
	@Autowired
	private PokemonService pokemonService;
	
	@Autowired
	private CoachService coachService;
	
	//Buscar un pokemon por ID
	@GetMapping("pokemon/{idPokemon}")
	public ResponseEntity<PokemonDTO> getPokemonById(@PathVariable Long idPokemon){
		return ResponseEntity.ok(pokemonService.getPokemonById(idPokemon));
	}

	//Listado de pokemon
	@GetMapping("pokemon/all")
	public ResponseEntity<List<PokemonDTO>> getAllPokemon(){
		return ResponseEntity.ok(pokemonService.getAllPokemon());
	}
	
	//Listado de pokemon salvajes
	@GetMapping("pokemon/wild")
	public ResponseEntity<List<PokemonDTO>> getAllPokemonWild(){
		return ResponseEntity.ok(pokemonService.getAllPokemonWild());
	}
	
	// Crear un nuevo pokemon (Devolver un http 201)
	@PostMapping("pokemon/create")	
	public ResponseEntity<PokemonDTO> createPokemon(@RequestBody PokemonDTO pokemonDTO){
		PokemonDTO pokemonCreated = pokemonService.createPokemon(pokemonDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body(pokemonCreated);
	}
	
	//Listado de entrenadores y sus pokemon
	@GetMapping("coach/all")
	public ResponseEntity<List<CoachDTO>> getAllCoach(){
		return ResponseEntity.ok(coachService.getAllCoach());
	}
	
	//Buscar un entrenador por nombre. (Si no encuentra el entrenador devolver un 404 not found)
	@GetMapping("coach/findByName")
	public ResponseEntity<CoachDTO> getCoachByName(@RequestParam String name){
		CoachDTO coachFound= coachService.getCoachByName(name);
		ResponseEntity<CoachDTO> response;
		if(coachFound != null) {
			response = ResponseEntity.ok(coachService.getCoachByName(name));
		}
		else {
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		return response;
	}
	
	//Asignar un pokemon salvaje a un entrenador 
	@PatchMapping("pokemon/associate")
	public ResponseEntity<Void> associatePokemonWildWithCoach(@RequestParam Long idPokemon, @RequestParam Long idCoach){
		boolean status = pokemonService.associatePokemonWildWithCoach(idPokemon, idCoach);
		ResponseEntity<Void> response;
		if(status) {
			response = ResponseEntity.ok().build();
		}
		else {
			response = ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
		}
		return response;
	}

	//Liberar un pokemon asociado a un entrenador (Poner el ID_COACH a null)	
	@PatchMapping("pokemon/disassociate")
	public ResponseEntity<Void> disassociatePokemonWithCoach(@RequestParam Long idPokemon){
		boolean status = pokemonService.disassociatePokemonWithCoach(idPokemon);
		ResponseEntity<Void> response;
		if(status) {
			response = ResponseEntity.ok().build();
		}
		else {
			response = ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
		}
		return response;
	}
}

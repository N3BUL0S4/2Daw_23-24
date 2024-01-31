package com.example.demo.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TournamentDTO;
import com.example.demo.service.TournamentService;

@RestController
@RequestMapping("/tournament")
public class TournamentController {

	@Autowired
	private TournamentService tournamentService;

	@GetMapping("/all")
	public ResponseEntity<List<TournamentDTO>> getAllTournaments() {
		return ResponseEntity.ok(tournamentService.getAllTournaments());
	}

	@PatchMapping("/associatePlayerWinner")
	public ResponseEntity<Void> associatePlayerWinner(@RequestParam Long tournamentId, 
			@RequestParam Long playerId) {
		
		boolean status = tournamentService.associatePlayerToTournament(tournamentId, playerId);
		return status ? ResponseEntity.ok().build() : ResponseEntity.status(HttpStatus.NOT_FOUND).build(); 

	}

}

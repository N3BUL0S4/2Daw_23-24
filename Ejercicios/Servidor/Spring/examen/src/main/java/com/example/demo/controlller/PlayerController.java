package com.example.demo.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PlayerDTO;
import com.example.demo.service.PlayerService;

@RestController
@RequestMapping("/player")
public class PlayerController {

	@Autowired
	private PlayerService playerService;

	@GetMapping("/findById")
	public ResponseEntity<PlayerDTO> getPlayerById(@RequestParam Long playerId) {

		PlayerDTO player = playerService.getPlayerById(playerId);
		return player != null ? ResponseEntity.ok(player) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();

	}
	
	@PostMapping("/create")
	public ResponseEntity<PlayerDTO> createPlayer(@RequestBody PlayerDTO playerDTO){
		return ResponseEntity.status(HttpStatus.CREATED).body(playerService.createPlayer(playerDTO));
	}
	
	
	@GetMapping("/allActive")
	public ResponseEntity<List<PlayerDTO>> getAllPlayerActive(){
		return ResponseEntity.ok(playerService.getAllPlayerActive());
	}
}

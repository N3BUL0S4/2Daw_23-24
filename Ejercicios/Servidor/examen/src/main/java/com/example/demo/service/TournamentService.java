package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.TournamentDTO;
import com.example.demo.entity.TournamentEntity;
import com.example.demo.mapper.TournamentMapper;
import com.example.demo.repository.PlayerRepository;
import com.example.demo.repository.TournamentRepository;

@Service
public class TournamentService {
	
	@Autowired
	private TournamentRepository tournamentRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private TournamentMapper tournamentMapper;
	
	public List<TournamentDTO> getAllTournaments(){
		return tournamentMapper.tournamenEntityToDto(tournamentRepository.findAll());
	}
	
	public boolean associatePlayerToTournament(Long tournamentId, Long playerId) {
		 
		boolean status = false;
		if(tournamentRepository.existsById(tournamentId) && playerRepository.existsById(playerId)) {
			TournamentEntity t = tournamentRepository.findById(tournamentId).get();
			if(t.getWinner() == null) {
				t.setWinner(playerRepository.findById(playerId).get());
				tournamentRepository.save(t);
				status = true;
			}
		}
		
		return status;
		
		
	}

}

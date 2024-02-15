package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.PlayerDTO;
import com.example.demo.entity.PlayerEntity;
import com.example.demo.mapper.PlayerMapper;
import com.example.demo.repository.PlayerRepository;

@Service
public class PlayerService {

	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private PlayerMapper playerMapper;
	
	/**
	 * Obtiene un player en base a su identificador
	 * @param playerId Identificador del player
	 * @return playerDto
	 */
	public PlayerDTO getPlayerById(Long playerId) {
		
		Optional<PlayerEntity> playerEntity = playerRepository.findById(playerId);
		PlayerDTO playerDTO = null;
		
		if(playerEntity.isPresent()) {
			playerDTO =playerMapper.playerEntityToDto(playerEntity.get());
		}
		
		return playerDTO;
		
	}
	
	public PlayerDTO createPlayer(PlayerDTO player) {		
		PlayerEntity playerCreated = playerRepository.save(playerMapper.playerDtoToEntity(player));
		return playerMapper.playerEntityToDto(playerCreated);
	}
	
	
	public List<PlayerDTO> getAllPlayerActive(){
		return playerMapper.playerEntityToDto(playerRepository.findAllActives(true));
	}
	
}

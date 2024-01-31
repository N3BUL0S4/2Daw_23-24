package com.example.demo.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.example.demo.dto.TournamentDTO;
import com.example.demo.entity.TournamentEntity;

@Mapper(componentModel = "spring", uses = PlayerMapper.class)
public interface TournamentMapper {
	
	List<TournamentDTO> tournamenEntityToDto(List<TournamentEntity> tournament);

}

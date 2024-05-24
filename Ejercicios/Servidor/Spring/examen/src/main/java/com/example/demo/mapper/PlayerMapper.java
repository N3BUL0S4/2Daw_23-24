package com.example.demo.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import com.example.demo.dto.PlayerDTO;
import com.example.demo.entity.PlayerEntity;

@Mapper(componentModel = "spring")
public interface PlayerMapper {
	
	PlayerDTO playerEntityToDto(PlayerEntity playerEntity);
	
	PlayerEntity playerDtoToEntity(PlayerDTO playerDto);
	
	List<PlayerDTO> playerEntityToDto(List<PlayerEntity> playerEntity);


}

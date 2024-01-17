package com.example.demo.dto;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoachDTO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	private Long id;
	private String name;
	private String town;
	private boolean cap;
	private List<PokemonDTO> pokemon;
	

}

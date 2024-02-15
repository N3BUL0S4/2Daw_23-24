package com.example.demo.dto;

import java.io.Serializable;

import com.example.demo.entity.TypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PokemonDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private TypeEnum type;
	private Integer level;
	private Integer health;
	private Integer healthMax;
	private CoachDTO coach;
}

package com.example.demo.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "POKEMON")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PokemonEntity implements Serializable{


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "TYPE", nullable = false)
	private TypeEnum type;
	
	@Column(name = "LEVEL", nullable = false)
	private Integer level;
	
	@Column(name = "HEALTH", nullable = false)
	private Integer health;
	
	@Column(name = "HEALTH_MAX", nullable = false)
	private Integer healthMax;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "COACH_ID", nullable = true)
	private CoachEntity coach;
	
	
}

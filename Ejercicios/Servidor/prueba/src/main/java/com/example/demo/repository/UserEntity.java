package com.example.demo.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "User")
public class UserEntity {
	

	@Id
    private Long id;
	private String firstName;
	private String lastName;
	private int telefono;
	private String mail;
}


package com.example.demo.user;


import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class User{
	private Long id;
	private String firstName;
	private String lastName;
	private int telefono;
	private String mail;
}

package com.example.demo.Order;

import java.time.LocalDate;

import com.example.demo.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
	
	public enum Estado{procesado,noProcesado}
	
	private Long id;
	private Integer precio;
	private Estado estado;
	private LocalDate fechaPedido;
	private User user;
}

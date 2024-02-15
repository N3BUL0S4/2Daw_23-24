package com.example.demo.dto;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Cuenta implements Serializable{

	private static final long serialVersionUID = 1L;
    Long id;
    String concept;
    Double price;
    LocalDate date;
}
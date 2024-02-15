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
public class Subcriber implements Serializable {

    private static final long serialVersionUID = 1L;

    String name;
    Long id;
    String email;
    Double price;
    LocalDate date;
    Boolean process;
    
}

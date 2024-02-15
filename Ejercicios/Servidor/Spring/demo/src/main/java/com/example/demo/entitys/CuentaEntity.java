package com.example.demo.entitys;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Table;


@Entity
@Table(name="cuenta")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CuentaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    
    @Column(name="CONCEPT", nullable = false)
    String concept;
    
    @Column(name="PRICE", nullable = false)
    Double price;

    @Column(name="DATE", nullable = false)
    LocalDate date;
}

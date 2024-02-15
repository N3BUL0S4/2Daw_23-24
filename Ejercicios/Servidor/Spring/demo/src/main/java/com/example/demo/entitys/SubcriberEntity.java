package com.example.demo.entitys;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="subscriber")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SubcriberEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "NAME", nullable = false)
    String name;

    @Column(name = "EMAIL", nullable = false)
    String email;

    @Column(name = "PRICE", nullable = false)
    Double price;

    @Column(name = "DATE", nullable = false)
    LocalDate date;

    @Column(name = "PROCESS", nullable = false)
    Boolean process;
    
}
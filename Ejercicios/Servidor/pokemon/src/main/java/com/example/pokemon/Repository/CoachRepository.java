package com.example.pokemon.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.pokemon.Entitys.CoachEntity;

@Repository
public interface CoachRepository extends JpaRepository<CoachEntity, Long> {
  
}
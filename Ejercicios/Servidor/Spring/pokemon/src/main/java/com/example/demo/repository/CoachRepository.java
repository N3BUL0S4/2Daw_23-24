package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.CoachEntity;

public interface CoachRepository extends JpaRepository<CoachEntity, Long>{
	
	//Se puede construir la consulta de forma nativa o JPQL(Usando la entidad de java)
	//@Query(value = "SELECT * FROM coach WHERE upper(name) = upper(?1)", nativeQuery = true)
	@Query("SELECT c FROM CoachEntity c WHERE upper(c.name) = upper(?1)")
	CoachEntity findCoachByName(String name);
}

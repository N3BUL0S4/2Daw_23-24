package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PlayerEntity;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Long> {
	
	//TODO - Os pongo las 3 posibles opciones de crear la consulta, solo es necesario una.
	

	// Consulta automática utilizando indicando active que es un propiedad ya
	// definida
	List<PlayerEntity> findAllByActive(boolean active);

	// Consulta personalizada JPQL (Osea el nombre de los ficheros java)
	@Query("SELECT p FROM PlayerEntity p WHERE p.active = ?1")
	List<PlayerEntity> findAllActives(boolean active);

	// Consulta personalizada SQL
	@Query(value = "SELECT * FROM player WHERE active = true", nativeQuery = true)
	List<PlayerEntity> findAllActives();
}

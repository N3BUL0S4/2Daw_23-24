package es.riberamolinos.examfinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import es.riberamolinos.examfinal.entity.SaleEntity;

@Repository
public interface SaleRepository extends JpaRepository<SaleEntity, Long>{


    
}
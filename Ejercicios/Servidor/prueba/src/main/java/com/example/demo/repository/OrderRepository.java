package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<UserEntity, Long>{
    
}

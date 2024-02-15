package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.AccountEntity;

public interface AccountRepository extends JpaRepository<AccountEntity, Long>{

}

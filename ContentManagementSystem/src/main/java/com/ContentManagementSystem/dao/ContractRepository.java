package com.ContentManagementSystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ContentManagementSystem.model.Contract;

public interface ContractRepository extends JpaRepository<Contract, Integer>{

}

package com.ContentManagementSystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ContentManagementSystem.dao.ContractRepository;
import com.ContentManagementSystem.model.Contract;

@Service
public class ContractService {
	
	@Autowired
	private ContractRepository contractRepository;
	
	public void Create(Contract contract) {
		contractRepository.save(contract);
		
	}
	

}

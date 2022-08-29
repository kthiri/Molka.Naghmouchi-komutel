package com.ContentManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ContentManagementSystem.dao.ContractRepository;
import com.ContentManagementSystem.model.Contract;

@RestController
@RequestMapping("contract")
@CrossOrigin("http://localhost:3000")
public class ContractController {
	
	@Autowired
	private ContractRepository contractRepository;
	
	
	@GetMapping
	public List<Contract> getAll(){
		return contractRepository.findAll();
	}
	
	@PostMapping
	public void create(@RequestBody Contract contract ) {
		contractRepository.save(contract);
	}
	

}

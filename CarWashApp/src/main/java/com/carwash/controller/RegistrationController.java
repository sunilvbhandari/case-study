package com.carwash.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.carwash.model.RegisteredCustomer;
import com.carwash.repo.RegCustomerRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/carwash")
public class RegistrationController {

	@Autowired
	RegCustomerRepository repository;

	@PostMapping("/reg")
	public List<RegisteredCustomer> addCustomers(@RequestBody RegisteredCustomer rc) {
		repository.save(rc);

		return repository.findAll();
	}

}

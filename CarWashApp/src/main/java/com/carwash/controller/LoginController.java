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
import com.carwash.model.LoginCustomer;
import com.carwash.model.RegisteredCustomer;
import com.carwash.repo.RegCustomerRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/carwash")
public class LoginController {

	@Autowired
	RegCustomerRepository repository;

	@PostMapping("/login")
	public String validateCustomer(@RequestBody LoginCustomer lc) {
		List<RegisteredCustomer> customers = new ArrayList<>();
		repository.findAll().forEach(customers::add);
		for (RegisteredCustomer customer : customers) {
			if (customer.getEmail().equals(lc.getEmail()) && customer.getPassword().equals(lc.getPassword())) {
				return "Login successful";
			}
		}
		return "Invalid credentials";
	}
	
}

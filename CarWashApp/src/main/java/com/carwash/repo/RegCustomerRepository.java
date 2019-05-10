package com.carwash.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.carwash.model.RegisteredCustomer;



public interface RegCustomerRepository extends MongoRepository<RegisteredCustomer, String> {


}

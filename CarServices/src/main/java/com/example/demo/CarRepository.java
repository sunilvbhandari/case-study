package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;


interface CarRepository extends MongoRepository<Car, Long> {
}

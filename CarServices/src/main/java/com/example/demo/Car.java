package com.example.demo;



import org.springframework.data.annotation.Id;

import lombok.*;



public class Car {
    @Id 
    private Long id;
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	@Override
	public String toString() {
		return "Car [id=" + id + ", name=" + name + "]";
	}
	public void setName(String name) {
		this.name = name;
	}
	private @NonNull String name;
}
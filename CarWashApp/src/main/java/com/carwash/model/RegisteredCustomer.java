package com.carwash.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customer")
public class RegisteredCustomer {

	private String name;
	@Id
	private String email;
	private String password;
	private String mobileNo;
	public RegisteredCustomer(String name, String email, String password, String mobileNo) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	@Override
	public String toString() {
		return "LoginCustomer [name=" + name + ", email=" + email + ", password=" + password + ", mobileNo=" + mobileNo
				+ "]";
	}

	
	
}
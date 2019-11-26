package com.sandeep.Spring;

import org.springframework.stereotype.Component;

@Component
public class Tyre 
{
	public String brand;
	
//	public Tyre(String brand) {
//		super();
//		this.brand = brand;
//	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	@Override
	public String toString() {
//		return "Tyre [brand=" + brand + "]";
		return "Its working";
	}
	
}

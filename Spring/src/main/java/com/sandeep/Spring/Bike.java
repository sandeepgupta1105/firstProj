package com.sandeep.Spring;

import org.springframework.stereotype.Component;

@Component
public class Bike implements VehicleInterface
{
	public void drive()
	{
		System.out.println("bhaag raha hai");
	}	
}

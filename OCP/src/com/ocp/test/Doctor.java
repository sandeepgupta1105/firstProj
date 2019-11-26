package com.ocp.test;

public class Doctor extends Employee{

	public Doctor(int id, String name, String department, boolean isWorking) {
		super(id, name, department, isWorking);
		System.out.println("Doctor in action....");
	}

}

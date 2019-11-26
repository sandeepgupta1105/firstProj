package com.ocp.test;

public class Nurse extends Employee{

	public Nurse(int id, String name, String department, boolean isWorking) {
		super(id, name, department, isWorking);
		System.out.println("Nurse in action....");
	}

}

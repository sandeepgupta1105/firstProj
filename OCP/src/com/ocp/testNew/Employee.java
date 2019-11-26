package com.ocp.testNew;

abstract public class Employee {
	
	private int id;
	private String name;
	private String department;
	private boolean isWorking;
	
	public Employee(int id, String name, String department, boolean isWorking) {
		
		super();
		this.id= id;
		this.name = name;
		this.department = department;
		this.isWorking = isWorking;
	}
	
	public abstract void performingDuties();
	
	public String toString() {
		return " Employee [id = " + id + ", name = " + name + ", department = " 
				+ department + ", isWorking = " + isWorking + "]";
				
	}
	
}

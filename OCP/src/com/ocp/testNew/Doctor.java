package com.ocp.testNew;

public class Doctor extends Employee{

	public Doctor(int id, String name, String department, boolean isWorking) {
		super(id, name, department, isWorking);
		System.out.println("Doctor in action....");
	}
	
	//Doctor
	private void diagnosePatients() {
		System.out.println("Diagnosing patients....");
	}
	
	private void prescribeMedicines() {
		System.out.println("Prescribing medicines....");
	}

	@Override
	public void performingDuties() {
		diagnosePatients();
		prescribeMedicines();
	}

}

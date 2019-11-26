package com.ocp.testInterface;

public class Doctor implements Employee{

	public Doctor(int id, String name, String department, boolean isWorking) {
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

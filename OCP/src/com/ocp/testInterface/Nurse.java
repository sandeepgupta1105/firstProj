package com.ocp.testInterface;

public class Nurse implements Employee{

	public Nurse(int id, String name, String department, boolean isWorking) {
		System.out.println("Nurse in action....");
	}

	//nurse
	private void checkVitalSigns() {
		System.out.println("Checking Vitals....");
	}
	
	private void cleaningPatientRooms() {
		System.out.println("Cleaning patients rooms....");
	}

	@Override
	public void performingDuties() {
		checkVitalSigns();
		cleaningPatientRooms();
		
	}
}

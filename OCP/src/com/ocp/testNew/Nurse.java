package com.ocp.testNew;

public class Nurse extends Employee{

	public Nurse(int id, String name, String department, boolean isWorking) {
		super(id, name, department, isWorking);
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

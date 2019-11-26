package com.ocp.test;

public class HospitalManagement {

	public void callUpon(Employee employee){
		
		if(employee instanceof Nurse) {
			checkVitalSigns();
			cleaningPatientRooms();
		}else if(employee instanceof Doctor) {
			diagnosePatients();
			prescribeMedicines();
		}
	}
	
	//nurse
	private void checkVitalSigns() {
		System.out.println("Checking Vitals....");
	}
	
	private void cleaningPatientRooms() {
		System.out.println("Cleaning patients rooms....");
	}
	
	//Doctor
	private void diagnosePatients() {
		System.out.println("Diagnosing patients....");
	}
	
	private void prescribeMedicines() {
		System.out.println("Prescribing medicines....");
	}
}

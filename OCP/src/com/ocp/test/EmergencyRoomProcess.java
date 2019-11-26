package com.ocp.test;

public class EmergencyRoomProcess {
	
	public static void main (String args[]) {
		HospitalManagement hm = new HospitalManagement();
		Employee nurse = new Nurse(1, "name1", "department1", true);
		hm.callUpon(nurse);
		Employee doctor = new Doctor(2, "name2", "department2", true);
		hm.callUpon(doctor);
	}
}

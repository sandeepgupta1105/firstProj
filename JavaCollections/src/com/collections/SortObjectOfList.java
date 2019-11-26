package com.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class SortObjectOfList {
	public static void main(String args[]) {
		List<Employee> list = new ArrayList<>();
		list.add(new Employee(20, "javainterviewpoint"));
		list.add(new Employee(10, "javainterview"));
		list.add(new Employee(30, "jip"));
		list.add(new Employee(5, "jiphhhhhhh"));
		
		Comparator<Employee> compObj = new Comparator<Employee>() {
			
			@Override
			public int compare(Employee o1, Employee o2) {
				// TODO Auto-generated method stub
//				return (o1.getEid() - o2.getEid());
				if(o1.getEid() - o2.getEid() > 0) {
					return 1;
				} else if(o1.getEid() - o2.getEid() < 0) {
					return -1;
				} else
					return 0;
			}
		};
		
		Collections.sort(list , compObj);
		System.out.println(list);
	}
}

//class ComparatorImpl implements Comparator {
//	public int compare(Employee e1, Employee e2) {
//		// if e1's id is greater than e2's eid then it returns a positive interger
//		// if e1's id is lesser than e2's eid then it returns a negative interger
//		// if e1's id is equal than e2's eid then it returns zero
//		return (e1.getEid() - e2.getEid());
//	}
//}

class Employee {
	private String empname;
	private int eid;

	public Employee(int eid, String empname) {
		this.eid = eid;
		this.empname = empname;
	}

	public String getEmpname() {
		return empname;
	}

	public void setEmpname(String empname) {
		this.empname = empname;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String toString() {
		return " \n id : " + this.eid + " empname : " + this.empname;
	}
}
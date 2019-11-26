package com.sandeep.demorest;

import java.util.ArrayList;
import java.util.List;

public class MyClassRepository {
	
	List<MyClass> myClass;
	
	public MyClassRepository() {
		myClass = new ArrayList<>();
		
		MyClass obj = new MyClass();
		obj.setId(101);
		obj.setName("Sandeep");
		obj.setPoints(10);
		
		MyClass obj1 = new MyClass();
		obj1.setId(102);
		obj1.setName("Sumit");
		obj1.setPoints(20);
		
		MyClass obj2 = new MyClass();
		obj2.setId(103);
		obj2.setName("Shekhar");
		obj2.setPoints(30);
		
		myClass.add(obj);
		myClass.add(obj1);
		myClass.add(obj2);
	}
	
	public List<MyClass> getMyClasses(){
		
		return myClass; 
	}
	
	public MyClass getMyClass(int id) {
		
		MyClass obj1 = null;
		for(MyClass obj : myClass) {
			if(obj.getId() == id) {
				return obj;
			}
		}
		return null;
	}

	public void create(MyClass obj) {
		
		myClass.add(obj);
	}
}

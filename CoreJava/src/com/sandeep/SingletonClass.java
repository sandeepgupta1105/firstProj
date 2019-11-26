// Sample code for singleton class
package com.sandeep;

public class SingletonClass {
	
	public static void main(String[] args) {
		
//		abc obj1 = new abc();
//		abc obj2 = new abc();
		
		abc obj1 = abc.getInstance();
		System.out.println(obj1.var);
		obj1.var = 12;
		abc obj2 = abc.getInstance();
		System.out.println(obj2.var);
	}
}

class abc{
// 1. create a static object inside the class itself
// 2. create a private empty constructor.
// 3. create a public static method to return the static object.
static abc obj = new abc();
	
	int var = 10;
	private abc() {
		
	}
	public static abc getInstance() {
		return obj;
	}
}
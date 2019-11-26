package com.sandeep;

public class Polymorphism {
	public static void main(String[] args) {
		
		A a = new B();
		a.run();
//		B b = new A(); incorrect statement
		A a1 = new A();
		a1.run();
		
		B b = new B();
		b.run();
		
	}
}

class A{
	public void run() {
		System.out.println("A");
	}
}
class B extends A{
	public void run() {
		System.out.println("B");
	}
}
package com.collections;

interface A{
	void show(int i);
}

class B implements A{
	public void show(int i) {
		System.out.println("inside B");
	}
}

public class LambdaExpression {

	public static void main(String... args) {
		A obj;
//		obj = new B();
//		obj.show();
		
		//
//		A obj = new A() {		// Anonymous inner class
//			public void show(int i) {
//				System.out.println("inside A");
//			}
//		};
		//
		
//		A obj = (i) ->
//			{
//				System.out.println("inside A");
//			};
			
			
		obj = i -> System.out.println("inside A " + i);
		
		obj.show(6);
		
		
	}
}

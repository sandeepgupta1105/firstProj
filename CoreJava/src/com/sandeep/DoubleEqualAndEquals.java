package com.sandeep;

// == is meant for reference comparison or address comparison
// .equals is meant for content comparison

public class DoubleEqualAndEquals {

	public static void main(String[] args) {
		
		String s1 = new String("Sandeep"); // this will create object in Heap memory
		String s2 = new String("Sandeep");
//		s2=s1;
		System.out.println("Sandeep");
		System.out.println(s1 == s2);
		System.out.println(s1.equals(s2));
		
		String s3 = "Sandeep"; // this will create string object in String pool
		String s4 = "Sandeep"; // this will refer to the same string pool location of s3
		System.out.println(s3 == s4);
		System.out.println(s3.equals(s4));
	}
}

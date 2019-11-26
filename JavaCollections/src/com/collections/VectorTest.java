package com.collections;

import java.util.Vector;

// Vector is a type of list
// vector is dynamic array
public class VectorTest {

	public static void main(String... args) {
		Vector<Integer> v = new Vector<>();
		v.add(4);
		v.add(8);
		v.add(4);
		v.add(9);
		v.add(8);
		v.add(6);
		v.add(4);
		v.add(2);
		v.add(4);
		v.add(2);
		v.add(1);
		
		v.forEach(System.out::println);
		System.out.println(v.capacity());
		System.out.println("\n");
		v.remove(3);
		for(int i : v) {
			System.out.println(i);
		}
	}
}

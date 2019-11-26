package com.collections;

import java.util.Arrays;
import java.util.List;

// Vector is a type of list
// vector is dynamic array
public class EnhancedForLoop {

	public static void main(String... args) {
		List<Integer> values = Arrays.asList(12,13,45);
		
		// 1st method external for loop
		for(int i=0; i < values.size(); i++) {
			System.out.println(values.get(i));
		}
		
		// 2nd method this is also external for loop
		for(int i : values) {
			System.out.println(i);
		}
		
		//3rd method introduced in java 8 , it is internal for loop
		values.forEach(i -> System.out.println(i));
	}
}

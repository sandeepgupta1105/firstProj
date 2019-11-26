package com.collections;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetInterfaceTest {
	public static void main(String... args) {
//		Set<Integer> values = new HashSet<>(); // gives uncertain output
		Set<Integer> values = new TreeSet<>(); // gives a sorted output
		values.add(57);
		values.add(6);
		values.add(7);
		values.add(6);
		values.add(87);
		values.add(99);

		values.forEach(System.out::println);
		for (int i : values) {
			System.out.println(i);
		}
	}

}

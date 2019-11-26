package com.collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class TestArrayList {

	public static void main(String[] args) {
		
		List<Integer> values = new ArrayList<Integer>();

//		List<Integer> values1 = new ArrayList<Integer>() // it is other way of initializing array list
//		{{
//			add(21);
//			add(31);
//		}};
		
//		List<Integer> values2 = Arrays.asList(12,13,45); // it is other way of initializing array list
		
		values.add(5);
		values.add(6);
		values.add(7);
		values.add(87);
		values.add(2, 3);
		Iterator<Integer> itr = values.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		
		Collections.sort(values);
//		values.forEach(System.out::println);
		
		for(int i : values) {
			System.out.println(i);
		}
		
//		values.remove(5);
//		System.out.println("values after removal \n");
//		for(Object i : values) {
//			System.out.println(i);
//		}
	}
}

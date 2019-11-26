package com.collections;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class TestList {

	public static void main(String[] args) {
		
		Collection values = new ArrayList();
		values.add(5);
		values.add("Sandeep");
		values.add("Ramesh");
		values.add(87);
		values.add(2);
		Iterator<Object> itr = values.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		
		values.remove(5);
		System.out.println("values after removal \n");
		for(Object i : values) {
			System.out.println(i);
		}
	}
}

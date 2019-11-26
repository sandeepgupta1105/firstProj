package com.collections;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortPrimitiesOfList {
	public static void main(String args[]) {
		List l = new ArrayList();
		l.add("B");
		l.add("A");
		l.add("C");
		l.add("E");
		l.add("D");
		Collections.sort(l);
		System.out.println(l);
	}
}
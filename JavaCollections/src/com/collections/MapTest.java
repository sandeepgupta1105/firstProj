package com.collections;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;
import java.util.Set;

public class MapTest {
	public static void main(String... args) {
		
//		Map<Integer, String> map = new HashMap<>(); // not Synchronized
		Map<Integer, String> map = new Hashtable<>(); // Synchronized
		map.put(1, "Sandeep");
		map.put(2, "Anil");
		map.put(3, "Sunil");
		map.put(4, "Shiva");
		map.put(3, "Rama");
		
		Set<Integer> keys = map.keySet();
		for(int key : keys) {
			System.out.println(key + "::::" + map.get(key));
//			System.out.println(map.get(key));
		}
//		System.out.println(map);
	}
}

package com.sandeep.ds;

import java.util.HashMap;
import java.util.Map;

public class DuplicateCharacterFromString {

	public static void main(String[] arr) {
		
		String str = "SandeepSD";
		Map hm = new HashMap();
		StringBuilder br = new StringBuilder();
		for(int i = 0; i < str.length(); i++) {
			if(hm.containsKey(str.charAt(i))) {
				br.append(str.charAt(i));
			}
			hm.put(str.charAt(i), str.charAt(i));
			
		}
		System.out.println(br.toString());
	}
}

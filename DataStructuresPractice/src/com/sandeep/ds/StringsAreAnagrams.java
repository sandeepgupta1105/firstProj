package com.sandeep.ds;

import java.util.HashMap;
import java.util.Map;

public class StringsAreAnagrams {

	public static void main(String[] args) {
		String str1 = "army";
		String str2 = "mary";
		
		boolean flag = isAnagram(str1, str2);
		System.out.println(flag);
	}

	public static boolean isAnagram(String str1, String str2) {
		
		boolean flag = true;
		Map hm = new HashMap();
		if(str1 == null || str2 == null) {
			flag = false;
		}else if(str1.length() != str2.length()) {
			flag = false;
		}else {
			for(int i = 0; i < str1.length(); i++) {
				hm.put(str1.charAt(i), str1.charAt(i));
			}
			
			for(int i = 0; i < str2.length(); i++) {
				if(!hm.containsKey(str2.charAt(i))) {
					flag = false;
				}
			}
		}
		return flag;
	}
}

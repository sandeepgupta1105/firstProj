package com.sandeep;

import java.util.HashSet;
import java.util.Set;

public class RemoveDuplicates {

	public static void main(String[] args) {

		String str = "sandeep";
		String newStr = removeDuplicates(str);
		System.out.println(newStr);

	}

	public static String removeDuplicates(String str) {

		Set<Character> set = new HashSet<>();
		StringBuilder sb = new StringBuilder();

		char[] charArr = str.toCharArray();

		for (int i = 0; i < charArr.length; i++) {
			if (!set.contains(charArr[i])) {
				set.add(charArr[i]);
				sb.append(charArr[i]);
			}
		}
		return sb.toString();
	}

}

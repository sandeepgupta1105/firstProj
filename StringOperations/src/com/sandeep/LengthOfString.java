package com.sandeep;

public class LengthOfString {

	public static void main(String[] args) {

		String s = "Sandeep";

		int count = 0;

		for (char c : s.toCharArray()) {
			count++;
		}
		System.out.println(count);

	}
}

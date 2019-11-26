package com.sandeep;

public class PalindromeString {

	public static void main(String[] args) {

		String s1 = "1232111";
		String s2 = "";

		char[] charArr = s1.toCharArray();

		for (int i = charArr.length - 1; i >= 0; i--) {
			s2 = s2 + charArr[i];
		}
		
		if (s1.equalsIgnoreCase(s2)) {
			System.out.println("String is palindrome");
		} else {
			System.out.println("String is not palindrome");
		}
	}
}

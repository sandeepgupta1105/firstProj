package com.sandeep;

public class SwapTwoStrings {

	public static void main(String[] args) {

		String str1 = "abc";
		String str2 = "def";

		System.out.println("Value of str1 and str2 before swapping :");
		System.out.println("Value of str1 before swapping :" + str1);
		System.out.println("Value of str2 before swapping :" + str2);

		str1 = str1 + str2;
		str2 = str1.substring(0, str1.length() - str2.length());
		str1 = str1.substring(str2.length());

		System.out.println("Value of str1 and str2 after swapping :");
		System.out.println("Value of str1 after swapping :" + str1);
		System.out.println("Value of str2 after swapping :" + str2);

	}
}

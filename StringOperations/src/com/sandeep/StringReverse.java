package com.sandeep;

import java.util.Scanner;

public class StringReverse {
	public static void main(String[] args) {

		String input = "";
		String reverse = "";
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter input String : ");
		input = sc.nextLine();
		int len = input.length();
		for (int i = len - 1; i >= 0; i--) {
			reverse = reverse + input.charAt(i);
		}
		System.out.println(reverse);
	}
}

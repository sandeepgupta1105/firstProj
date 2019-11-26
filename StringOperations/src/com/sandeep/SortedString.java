package com.sandeep;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class SortedString {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a string : ");
		String input = sc.next();
		sc.close();
		char temp;
		String sortedStr = "";

		char[] chArr = input.toCharArray();
		List<Character> li = new ArrayList<Character>();

		for(char c : chArr) {
			li.add(c);
		}
		Collections.sort(li);
		System.out.println(li);
//		for (int i = 0; i < chArr.length; i++) {
//			for (int j = i; j < chArr.length; j++) {
//				if (chArr[i] > chArr[j]) {
//					temp = chArr[i];
//					chArr[i] = chArr[j];
//					chArr[j] = temp;
//				}
//			}
//		}
//		for (int k = 0; k < chArr.length; k++) {
//			sortedStr = sortedStr + chArr[k];
//		}
//		System.out.println("Sorted String is " + sortedStr);
	}
}

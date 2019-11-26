package com.sandeep;

public class StringPatternSearch {

	public static void main(String[] args) {
		String text = "sandeepgupta";
		String pattern = "deep";
		int tlen = text.length();
		int plen = pattern.length();
		boolean result = false;
		int count = 0;
		char c, p;

		for (int i = 0; i <= tlen - plen; i++) {
			if (count != plen) {
				c = text.charAt(i);
				p = pattern.charAt(0);
				if (c == p) {
					for (int j = i, k = 0; j < i + plen; j++, k++) {
						c = text.charAt(j);
						p = pattern.charAt(k);
						if (c == p) {
							count++;
						}
					}
				}
			}
		}
		if (count == plen) {
			System.out.println("Pattern matched");
		} else {
			System.out.println("Pattern did not match");
		}
	}

}

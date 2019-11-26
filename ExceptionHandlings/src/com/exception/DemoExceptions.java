package com.exception;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DemoExceptions {
	public static void main(String[] args) {

		int i, j, k = 0;

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		i = 8;

		try {
			j = Integer.parseInt(br.readLine());
			k = i / j;
			System.out.println(k);
			System.out.println("Thank you");
			System.out.println("Bye bye");
			
		} catch (IOException e) {
			System.out.println("Some IO Exception");
		} catch (ArithmeticException e) {
			System.out.println("Can not divide by zero " + e);
		} catch (Exception e) {
			System.out.println("Default exception : " + e);
		} finally {
//			br.close();
			System.out.println("Finally Thank you");
			System.out.println("Finally Bye bye");
		}

	}

}

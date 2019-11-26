package com.exception;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.SQLException;

public class ThrowAndThrows {

//	public static void main(String[] args) throws Exception{
	public static void main(String[] args) throws IOException,SQLException, NumberFormatException{
		int i, j, k = 0;

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		i = 8;
		j = Integer.parseInt(br.readLine());
		k = i + j;
		
//		if(k < 10) {
//			throw new ArithmeticException();
//		}and u need to catch this in exception block
		System.out.println(k);
		System.out.println("Thank you");
		System.out.println("Bye bye");
	}

}

package com.exception;

public class UserDefinedExceptions {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int i = 5;
		try {
			if(i < 10) {
				throw new MyException("Error occured");
			}
		}catch(Exception e) {
			System.out.println("Default Exception " + e);
		}
	}

}

class MyException extends Exception{
	public MyException(String str) {
		super(str);
	}
}
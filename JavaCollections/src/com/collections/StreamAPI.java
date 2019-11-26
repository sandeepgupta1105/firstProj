package com.collections;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

//class ConsImpl implements Consumer<Integer>{
//	
//	public void accept(Integer i) {
//		// TODO Auto-generated method stub
//		System.out.println(i);
//	}	
//}

public class StreamAPI {

	public static void main(String... args) {

		// Consumer is a functional interface(Lambda expression can be used with
		// functional interface)
		
		List<Integer> values = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
		
		Consumer<Integer> cons = i -> System.out.println(i);
//		Consumer<Integer> cons = new ConsImpl();
		values.forEach(cons);
		// OR we can directly put "i -> System.out.println(i)" as parameter
		values.forEach(i -> System.out.println(i));
	}
}

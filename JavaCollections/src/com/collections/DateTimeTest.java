package com.collections;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Month;

/**
 * @author Sandeep
 *
 */
public class DateTimeTest {

	public static void main(String... args) {
		
		LocalDate date = LocalDate.now();
		System.out.println(date);
		
		LocalDate date1 = LocalDate.of(1990, 05, 11);
		System.out.println(date1);
		
		LocalDate date2 = LocalDate.of(1990, Month.MAY, 11);
		System.out.println(date2);
		
		// old way
		Date date3 = new Date(System.currentTimeMillis());
		System.out.println(date3);
		
		
		// LocalTime
		LocalTime time = LocalTime.now();
		System.out.println(time);
		
		LocalTime time1 = LocalTime.of(20, 21, 55);
		System.out.println(time1);
	}
}

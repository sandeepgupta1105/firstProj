package com.sandeep.Spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	
    	ApplicationContext ctxt = new ClassPathXmlApplicationContext("spring.xml");
        
    	VehicleInterface obj = (VehicleInterface) ctxt.getBean("car");
        obj.drive();
    	
//    	Tyre tyre = (Tyre) ctxt.getBean("tyre");
//    	System.out.println(tyre);
    }
}

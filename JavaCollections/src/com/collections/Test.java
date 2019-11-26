package com.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Test 
{
	public static void main(String args[])
	{
		List al = new ArrayList();
		al.add("1");
		al.add("2");
		al.add("3");
		al.add("4");
		al.add("5");

		System.out.println("List before Iteration "+al);
		int indexFlag=0;
		Iterator it = al.iterator();
		while(it.hasNext())
		{

			it.next();
			indexFlag++;

			if(indexFlag==2)
			{

				it.remove();
			}

		}
		System.out.println("List after Iteration"+al);
	}
}

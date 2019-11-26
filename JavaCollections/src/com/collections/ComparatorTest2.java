package com.collections;

import java.util.*;

class ComparatorTest2 implements Comparator<ComparatorTest> {
	public int compare(Student s1, Student s2) {
		if (s1.age == s2.age)
			return 0;
		else if (s1.age > s2.age)
			return 1;
		else
			return -1;
	}

	@Override
	public int compare(ComparatorTest arg0, ComparatorTest arg1) {
		// TODO Auto-generated method stub
		return 0;
	}
}

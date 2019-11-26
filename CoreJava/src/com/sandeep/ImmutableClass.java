package com.sandeep;


// 1. Make java class as final
public final class ImmutableClass {

	// 2. Make instance variable as private final
	private final Integer immutableField1;
	private final String immutableField2;
	
	// now take an mutable instance variable
	private final StringBuffer mutableField3;
	
	// 3. Create constructors to initialize the instance variables
	public ImmutableClass(Integer immutableField1, String immutableField2, StringBuffer mutableField3) {
		this.immutableField1 = immutableField1;
		this.immutableField2 = immutableField2;
		this.mutableField3 = new StringBuffer(mutableField3);
	}

	// 4. No setter methods for instance variables
	public Integer getImmutableField1() {
		return immutableField1;
	}

	public String getImmutableField2() {
		return immutableField2;
	}
	
	public StringBuffer getImmutableField3() {
		return mutableField3;
	}

}

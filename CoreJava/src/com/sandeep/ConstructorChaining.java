package com.sandeep;

// calling one constructor from other constructor is called constructor chaining.
public class ConstructorChaining {

}

class ABCD {
	ABCD() {
	}

	ABCD(int x) {
	}
}

class EFGH extends ABCD{
	EFGH() {
		this(12);
	}

	EFGH(int x) {
		super(111);
	}
}
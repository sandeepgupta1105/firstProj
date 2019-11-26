package com.sandeep;

public class MultithreadingRaceCondtion {

	private static Counter counter;

	public static void main(String[] args) throws InterruptedException {
		System.out.println("I am in Thread : " + Thread.currentThread().getName());
		counter = new Counter();

		Runnable task = () -> {
			for (int i = 0; i < 100; i++) {
				counter.incrementCount();
			}
		};

		Thread[] threads = new Thread[100]; // ccreating array of 1000 threads
		for (int i = 0; i < 100; i++) {
			threads[i] = new Thread(task); // creation of new Thread
			threads[i].start(); // Execution of task starts
		}

		// main thread waits here because of join method
		for (int i = 0; i < 100; i++) {
			threads[i].join(); // waiting for threads to complete their tasks
		}

		System.out.println("Value of counter is : " + counter.readCount());
	}
}

class Counter {

	// uncomment below commented lines to synchronize the code
	private static int count = 0;
//	private Object key = new Object();

	public void incrementCount() {
//		synchronized (key) {
			this.count = this.count + 1;
//		}
	}

	public int readCount() {
		return this.readCount();
	}
}
package com.serialization;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class DemoSerialization {
	public static void main(String[] args) throws Exception {
		Save obj = new Save();
		obj.i = 4;
		System.out.println(obj.i);
		
		
		File f = new File("Demo.txt");
		FileOutputStream fos = new FileOutputStream(f);
		ObjectOutputStream oos = new ObjectOutputStream(fos);
		oos.writeObject(obj);
		
		FileInputStream fis = new FileInputStream(f);
		ObjectInputStream ois = new ObjectInputStream(fis);
		Save obj1 = (Save) ois.readObject();
		System.out.println(":::::" + obj1.i);
	}
}

class Save implements Serializable{
	static int i;
}
package package1;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;

public class TestClass {

	public static void main(String[] args) throws FileNotFoundException {
		// TODO Auto-generated method stub
		
		File folder = new File("F:\\Newage\\FSL_MASTER_INSERT\\");
		String fileName = "";
		File[] fileNames = folder.listFiles();
		for(File file : fileNames){
			fileName = file.getName();
			firstTestMethod(fileName);
			secondTestMethod(fileName);
//			System.out.println(fileName);
		}
//		String fileName = "container_master.sql";
//		firstTestMethod(fileName);
//		secondTestMethod(fileName);
}

	private static void firstTestMethod(String fileName) throws FileNotFoundException {
		BufferedReader reader;
		File fout = new File("F:\\Newage\\FSL_MASTER_INSERT\\updated\\" + fileName);
		FileOutputStream fos = new FileOutputStream(fout);
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
		try {
			reader = new BufferedReader(new FileReader(
					"F:\\Newage\\FSL_MASTER_INSERT\\" + fileName));
			String line = reader.readLine();
			while (line != null) {
				System.out.println(line);
				// read next line
				if(line.contains("TO_DATE")) {
					int beginIndex = line.indexOf("TO_DATE");
					int endIndex = line.indexOf("HH24:MI:SS')");
					String dateValue=line.substring(beginIndex,endIndex+12);
					line = line.replace(dateValue, "CURRENT_DATE()");
//					line = line.replace(",NULL,", ",");
				}
				bw.write(line);
				bw.newLine();		 
				line=reader.readLine();
			}
			reader.close();
			bw.close();
			System.out.println("Done !!!!!");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private static void secondTestMethod(String fileName) throws FileNotFoundException {
		BufferedReader reader;
		File fout = new File("F:\\Newage\\FSL_MASTER_INSERT\\updated\\FinalUpdated\\" + fileName);
		FileOutputStream fos = new FileOutputStream(fout);
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
		try {
			reader = new BufferedReader(new FileReader(
					"F:\\Newage\\FSL_MASTER_INSERT\\updated\\"+ fileName));
			String line = reader.readLine();
			while (line != null) {
				System.out.println(line);
				// read next line
				if(line.contains("TO_DATE")) {
					int beginIndex = line.indexOf("TO_DATE");
					int endIndex = line.indexOf("HH24:MI:SS')");
					String dateValue=line.substring(beginIndex,endIndex+12);
					line = line.replace(dateValue, "CURRENT_DATE()");
//					line = line.replace(",NULL,", ",");
				}
				bw.write(line);
				bw.newLine();		 
				line=reader.readLine();
			}
			reader.close();
			bw.close();
			System.out.println("Done !!!!!");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
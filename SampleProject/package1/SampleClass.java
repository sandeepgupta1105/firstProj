package package1;

public class SampleClass {
	
	private String message;	
	
	public SampleClass(String message){
		this.message = message;
	}
	
	public SampleClass(){
		
	}
	
	public String printMessage() {
		System.out.println(message);
		return message;
	}

}

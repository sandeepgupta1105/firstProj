package package1;
//import package1.SampleClass;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
public class TestJunit {
	
   String message = "Hello World";	
   String message1 = "Hello World Sandeep";	
   SampleClass sampleClass = new SampleClass(message);
   SampleClass sampleClass1 = new SampleClass();
   
   @Test
   public void testPrintMessage() {
	   message = "New World";
      assertEquals(message,sampleClass.printMessage());
   }
}
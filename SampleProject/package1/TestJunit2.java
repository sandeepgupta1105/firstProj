package package1;

import static org.junit.Assert.assertFalse;
import junit.framework.TestCase;
import org.junit.Before;
import org.junit.Test;

public class TestJunit2 extends TestCase  {
   protected double fValue1;
   protected double fValue2;
   
   @Before 
   public void setUp() {
      fValue1 = 2.0;
      fValue2 = 3.0;
   }
	
   @Test
   public void testAdd() {
      //count the number of test cases
      System.out.println("No of Test Case = "+ this.countTestCases());
		
      //test getName 
      String name = this.getName();
      System.out.println("Test Case Name = "+ name);
      
      //test getClass 
      Class className = this.getClass();
      System.out.println("Class Name is " +className);

      //test setName
      this.setName("testNewAdd");
      String newName = this.getName();
      System.out.println("Updated Test Case Name = "+ newName);
      
//      assertEquals(true, false);
   }
	
   //tearDown used to close the connection or clean up activities
   public void tearDown(  ) {
   }
}
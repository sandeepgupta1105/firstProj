package com.collections;

public class Test2 
{
	public static String studentName;
	public static int age;
    
    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void disp()
    {
        System.out.println("Stundent Name : "+studentName+" Age : "+age);
    }
    
    public void disp2() {
    	Test2 s1 = new Test2();
        s1.setStudentName("JavaInterviewPoint");
        s1.setAge(22);
        
        Test2 s2 = new Test2();
        s2.setStudentName("JavaInterviewPoint2");
        s2.setAge(24);
        
        s1.disp();
        s2.disp();
    }
   
    public static void main(String args[])
    {
    	Test2 t2 = new Test2();
    	t2.disp2();
    }
}
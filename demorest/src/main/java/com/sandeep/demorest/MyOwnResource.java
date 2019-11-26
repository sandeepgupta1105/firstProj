package com.sandeep.demorest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("myownresource")
public class MyOwnResource {
	
	MyClassRepository myRep = new MyClassRepository();
	
	@GET
    @Produces(MediaType.APPLICATION_XML)
	public List<MyClass> getMyClass() {
		System.out.println("getMyClass called");
		return myRep.getMyClasses();
	}
	
	
	@GET
	@Path("myown/{id}")
    @Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public MyClass getMyClass_1(@PathParam("id") int id) {
		System.out.println("getMyClass called");
		return myRep.getMyClass(id);
	}
	
	@POST
	@Path("myownresourcepost")
	public MyClass createMyClassObject(MyClass obj) {
		
		myRep.create(obj);
		return obj;
	}
	
	@POST
	@Path("myownresourcepost1")
	public String createMyClassObject1(MyClass obj) {
		
		myRep.create(obj);
		return "Hurrrraayyyyyyyy!!!!!!!!!!";
	}
	
	
}

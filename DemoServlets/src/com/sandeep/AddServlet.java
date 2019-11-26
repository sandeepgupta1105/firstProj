package com.sandeep;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet
public class AddServlet extends HttpServlet{
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp){
		
		HttpSession session = req.getSession();

	}
}

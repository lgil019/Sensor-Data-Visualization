package com.koios.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Users;
import com.koios.server.repository.UsersRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UsersController {

	/**
	 * Class of where the data is being stored.
	 * 
	 */
	@Autowired
	private UsersRepository userRepository;
	
	/**
	 * This method helps login the by finding their email and matching the password to their account. 	 * 
	 * @param user the {@code Users} data
	 * @return {@code JSON} formatted login response
	 */
	@PostMapping("/login")
	String authenticateLogin(@RequestBody Users user) {
		
		
		System.out.println("authenticating login...");

		System.out.println("user email: " + user.getEmail());
		// This is what the user inputs from the client
		String inputEmail = user.getEmail();
		String inputPassword = user.getPassword();

		Users result = userRepository.findByEmail(inputEmail);
		
		
		if (result != null) {
			System.out.println("User Found E-mail: " + result.getEmail() + " pass: " + result.getPassword()
					+ " input e-mail: " + inputEmail + " input pass: " + inputPassword);

			//store database email
			String dbEmail = result.getEmail();
			String dbPassword = result.getPassword();
			
				//compare database email with user email
				if (inputEmail.equals(dbEmail) && inputPassword.equals(dbPassword)) {
					System.out.println("Account Successfully Authenticated");
					
					return "{" + "\"login_error\":\"0\"," + "\"time\":\"0\"" + "}";
					
				}
		} else {
			System.out.println("Error Logging in: Invalid Email/Pass");
			return "{" + "\"login_error\":\"2\"," + "\"time\":\"0\"" + "}";
		}
		System.out.println("Error Logging in");
		return "{" + "\"login_error\":\"1\"," + "\"time\":\"0\"" + "}";
	}
	
}

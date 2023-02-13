package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Users;
import com.koios.server.repository.UsersRepository;

/**
 * The {@code UsersController} handles any value parsing for the {@docRoot Users} database entry
 * @author Tony Erazo
 *
 */
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
	 * @param user
	 * @return
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
				return "{" + "\"login_error\":\"0\""+"}";
			} else {
				System.out.println("Wrong E-mail/Password");
				return "{" + "\"login_error\":\"2\""+"}";
			}
		}
		//TODO possibly send JSON formatted code reporting failure login attempt
		return "{" + "\"login_error\":\"1\""+"}";
	}
	
	/**
	 * Gets a list of all the users on the server
	 * @return list of users
	 */
	@GetMapping("/users")
	List<Users> getAllUsers() {
		return userRepository.findAll();
	}
}

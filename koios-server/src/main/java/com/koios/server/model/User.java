package com.koios.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * The Users class represents an SQL table entry of all the collection of registered users on the server
 * @author Tony Erazo
 *
 */
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue
	/**
	 * The user's email
	 */
	private String email;
	
	/**
	 * The user's password
	 */
	private String password;
	
	/**
	 * The user's token
	 */
	private String token;
	
	/**
	 * Gets the user's email
	 * @return email
	 */
	public String getEmail() {
		return email;
	}
	
	/**
	 * Changes the user's email
	 * @param email the new email address
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	
	/**
	 * Gets the user's password
	 * @return password
	 */
	public String getPassword() {
		return password;
	}
	
	/**
	 * Sets the user's password
	 * @param password the new password
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
	/**
	 * Gets the user's token
	 * @return token
	 */
	public String getToken() {
		return token;
	}
}
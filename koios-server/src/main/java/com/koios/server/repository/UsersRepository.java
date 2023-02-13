package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koios.server.model.Users;

/**
 * The {@code UsersRepository} class manages any access to the {@docRoot Users} database table
 * @author Tony Erazo
 *
 */
@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{

	/**
	 * Query repository using an email binded to the user
	 * @param email that's binded to the user you search by
	 * @return the {@docRoot Users} found
	 */
	public Users findByEmail(String email);
}

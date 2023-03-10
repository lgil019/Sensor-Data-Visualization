package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koios.server.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	/**
	 * Query repository using retrieved email
	 * @param email the e-mail searching the users by
	 * @return the {@code Users}
	 */
	public User findByEmail(String email);
}
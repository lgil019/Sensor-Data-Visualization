package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koios.server.model.Users;


@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{

	/**
	 * Query repository using retrieved email
	 * @param email the e-mail searching the users by
	 * @return the {@code Users}
	 */
	public Users findByEmail(String email);
}
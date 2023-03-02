package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koios.server.model.Study;

/**
 * The {@code StudyRepository} facilitates the data query of the {@code Study} entries within the database
 * @author Tony Erazo
 *
 */
@Repository
public interface StudyRepository extends JpaRepository<Study, Long>{

	/**
	 * Query the repository by using the specified identification digit
	 * @param id the identification digit searching the study by
	 * @return the {@code Study}
	 */
	public Study findById(Integer id);
	
}
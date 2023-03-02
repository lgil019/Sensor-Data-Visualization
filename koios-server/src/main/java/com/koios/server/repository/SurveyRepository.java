package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.koios.server.model.Survey;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long>{
    
	public Survey findById (Integer studyID);
	
}

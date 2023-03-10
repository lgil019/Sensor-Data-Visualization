package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koios.server.model.Survey;


/**
 * Services the functionality to any {@docRoot Study} entries
 * @author Jonathan
 *
 */
@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
	
    public Survey findByStudyId(Integer studyId);
    
    //TODO add path variables
    /*@Query(value = "SELECT * FROM survey_summary WHERE study_id = :studyId", nativeQuery=true)
    public List<Survey> getSurveyList(@Param("studyId") Integer studyId);*/
    
}
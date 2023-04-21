package com.koios.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.koios.server.model.QuestionResponse;

public interface QuestionResponseRepository extends JpaRepository<QuestionResponse, Long>{

    @Query(value = "SELECT *"
    		+ " FROM survey_response "
    		+ " WHERE study_id = ?1 AND survey_id = ?2 AND version = ?3", 
    		nativeQuery = true)
    public List<QuestionResponse> getQuestionResponseList(Integer study_id, Integer survey_id, Integer version);



	@Query(value = "SELECT COUNT(*) AS \"Count\""
			+ " FROM survey_response WHERE study_id = ?1 AND survey_id = ?2 AND version =?3"
			+ " GROUP BY \"Count\"", nativeQuery = true)
	public Integer getTotalResponses(Integer study_id, Integer survey_id, Integer version);

    @Query(value = "SELECT MAX(version) FROM survey_response WHERE study_id = ?1 AND survey_id = ?2", nativeQuery = true)
    public Integer getMaxVersion(Integer study_id, Integer survey_id);
    
    @Query(value = "Select COUNT(version) From survey_response WHERE study_id = ?1 AND survey_id = ?2 AND version = ?3", nativeQuery = true)
    public Integer getResponseCount(@Param("studyId") Integer studyId, @Param("surveyId") Integer surveyId, @Param("version") Integer version);

}

package com.koios.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.koios.server.model.QuestionResponse;

public interface QuestionResponseRepository extends JpaRepository<QuestionResponse, Long>{

    @Query(value = "SELECT *, COUNT(response)"
    		+ " FROM survey_response "
    		+ " WHERE study_id = ?1 AND survey_id = ?2 AND version = ?3", 
    		nativeQuery = true)
    public List<QuestionResponse> getQuestionResponseList(Integer study_id, Integer survey_id, Integer version);



	@Query(value = "select  version, count(response_summary_id) as \"Count\" from (Select response_summary_id, version from survey_response where survey_id = ? ) as responses group by version", nativeQuery = true)
	public List<Object[]> countByResponseCount( Integer study_id, Integer survey_id, Integer version);


}

package com.koios.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.koios.server.model.Question;

public interface QuestionsRepository extends JpaRepository<Question, Long> {

	@Query(value = "SELECT * FROM survey_task WHERE survey_id = ?", nativeQuery = true)
    public List<Question> findQuestionsBySurveyId(Integer surveyId);
	
    @Query(value = "SELECT *"
    		+ " FROM survey_task questions"
    		+ " WHERE questions.survey_id = ?1 AND questions.version = ?2", 
    		nativeQuery = true)
    public List<Question> getSurveyVersionQuestions(Integer survey_id, Integer version);
    
}

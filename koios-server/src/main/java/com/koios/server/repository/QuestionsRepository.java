package com.koios.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.koios.server.model.Question;
import com.koios.server.model.QuestionResponse;

public interface QuestionsRepository extends JpaRepository<Question, Long> {

	@Query(value = "SELECT * FROM survey_task WHERE survey_id = ?", nativeQuery = true)
    public List<Question> findQuestionsBySurveyId(Integer surveyId);
	
    @Query(value = "SELECT *"
    		+ " FROM survey_task questions"
    		+ " WHERE questions.survey_id = ?1 and questions.version = ?2", 
    		nativeQuery = true)
    public List<Question> getSurveyVersionQuestions(Integer survey_id, Integer version);
    
    
    @Query(value = "SELECT *"
    		+ " FROM survey_response "
    		+ " WHERE study_id = ?1 survey_id = ?2 and version = ?3", 
    		nativeQuery = true)
    public List<QuestionResponse> getQuestionResponseList(Integer study_id, Integer survey_id, Integer version);
    
}

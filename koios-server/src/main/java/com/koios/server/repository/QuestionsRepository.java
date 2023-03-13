package com.koios.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.koios.server.model.Question;
public interface QuestionsRepository extends JpaRepository<Question, Long> {

	@Query(value = "SELECT * FROM survey_task q WHERE q.survey_id = ?1", nativeQuery = true)
    public List<Question> findQuestionsBySurveyId(Integer surveyId);
    
}

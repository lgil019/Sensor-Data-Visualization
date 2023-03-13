package com.koios.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koios.server.model.Question;
public interface QuestionsRepository extends JpaRepository<Question, Long> {

    public Question findBySurveyId(Integer surveyId);
}

package com.koios.server.controllers;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Question;
import com.koios.server.repository.QuestionsRepository;
@RestController
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionsRepository questionsRepository;

    @GetMapping("/study/surveys/questions/{surveyId}")
    public List<Question> getQuestionList(@PathVariable Integer surveyId) {
        System.out.println("Retrieving all questions...");

        List<Question> questions = questionsRepository.findAll();
        List<Question> questionsInStudy = new ArrayList<>();


        for(Question question : questions) {
            System.out.println("Current Survey Id: " + question.getSurveyId());
            if(question.getSurveyId() == surveyId) {
                System.out.println("Found Matching Survey Id: " + question.getSurveyId());
                questionsInStudy.add(question);
            }
        }
        return questionsInStudy;
}

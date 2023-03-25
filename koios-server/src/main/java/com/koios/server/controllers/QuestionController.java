package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Question;
import com.koios.server.model.QuestionResponse;
import com.koios.server.repository.QuestionsRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionsRepository questionsRepository;

    @GetMapping("/study/{studyId}/surveys/{surveyId}/questions/")
    public List<Question> getQuestionList(@PathVariable Integer surveyId) {
        System.out.println("Retrieving all questions...");

        List<Question> questions = questionsRepository.findQuestionsBySurveyId(surveyId);
        
        Question ques = questions.get(0);
        System.out.println("Question s_id: " + ques.getSurveyId());
 	   	System.out.println("Questions: " + ques.getQuestion() + " for survey id: " + surveyId);
       for(Question q : questions) {
    	   if(q.getQuestion().equalsIgnoreCase(ques.getQuestion()))
    		   continue;
    	   System.out.println("Question s_id: " + q.getSurveyId());
    	   System.out.println("Questions: " + q.getQuestion() + " for survey id: " + surveyId);
       }
        return questions;
    }
    
    @GetMapping("/study/{studyId}/survey/{surveyId}/version/{publishedVersion}/questions/")     
    public List<Question> getSurveyVersionQuestions(@PathVariable Integer surveyId, @PathVariable Integer publishedVersion) {    
    	
    	//System.out.println("Survey Id: " + surveyId + " published ver: " + publishedVersion);
    	List<Question> versions = questionsRepository.getSurveyVersionQuestions(surveyId, publishedVersion);   

    	return versions;     
    }
    
    @GetMapping("/study/{studyId}/survey/{surveyId}/version/{publishedVersion}/questions/responselist/")   
    public List<QuestionResponse> getQuestionResponseList(@PathVariable Integer studyId, @PathVariable Integer surveyId, @PathVariable Integer publishedVersion) {
    	List<QuestionResponse> answers = questionsRepository.getQuestionResponseList(studyId, surveyId, publishedVersion);
    	
    	System.out.println("Grabbing responses...");
    	System.out.println("Response list size: " + answers.size());
    	for(QuestionResponse answ : answers) {
    		System.out.println(answ.getResponse());
    	}
    	return answers;
    }
    
}

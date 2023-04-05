package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.QuestionResponse;
import com.koios.server.repository.QuestionResponseRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuestionResponseController {

    @Autowired
    private QuestionResponseRepository responseRepository;
    
    @GetMapping("/study/{studyId}/survey/{surveyId}/version/{publishedVersion}/questions/responselist/")   
    public List<QuestionResponse> getQuestionResponseList(@PathVariable Integer studyId, @PathVariable Integer surveyId, @PathVariable Integer publishedVersion) {
    	List<QuestionResponse> answers = responseRepository.getQuestionResponseList(studyId, surveyId, publishedVersion);
    	
    	System.out.println("Grabbing responses...");
    	System.out.println("Response list size: " + answers.size());
    	for(QuestionResponse answ : answers) {
    		System.out.println(answ.getResponse());
    	}
    	return answers;
    }

	@GetMapping("/study/{studyId}/survey/{surveyId}/version/{publishedVersion}/questions/responselist/")
	public List<QuestionResponse> countByVersion(@PathVariable Integer studyId, @PathVariable Integer surveyId, @PathVariable Integer publishedVersion) {
		List <QuestionResponse> count = responseRepository.countByVersion(studyId, surveyId, publishedVersion);

		System.out.println("Response list size: " + count.size());
		for(QuestionResponse rnum : count) {
			System.out.println(rnum.getResponseCount());
		}

		return count;
	}   

}

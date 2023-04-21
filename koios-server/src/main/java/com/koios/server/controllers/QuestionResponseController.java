package com.koios.server.controllers;

import java.util.ArrayList;
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
	public List<QuestionResponse> getQuestionResponseList(@PathVariable Integer studyId, @PathVariable Integer surveyId,
			@PathVariable Integer publishedVersion) {
		List<QuestionResponse> answers = responseRepository.getQuestionResponseList(studyId, surveyId,
				publishedVersion);

		System.out.println("Grabbing responses...");
		System.out.println("Response list size: " + answers.size());
		for (QuestionResponse answ : answers) {
			System.out.println(answ.getResponse());
		}
		return answers;
	}

	@GetMapping("/study/{studyId}/survey/{surveyId}/version/{publishedVersion}/questions/responses/")
	public List<Integer> getTotalResponses(@PathVariable Integer studyId, @PathVariable Integer surveyId,
			@PathVariable Integer publishedVersion) {
		
		
		int maxVersion = responseRepository.getMaxVersion(studyId, surveyId);
		
		System.out.println("Max version " + maxVersion);
		List<Integer> responses = new ArrayList<>();
		for(int i = 0; i <= maxVersion; i++) {
			int maxResponseCount = responseRepository.getResponseCount(studyId, surveyId, i);
			responses.add(maxResponseCount);
			System.out.println("version: " + i + " resp-count: " + responses.get(i));
		}
		
		//Integer count = responseRepository.getTotalResponses(studyId, surveyId, publishedVersion);

		//System.out.println("Total count: " + count);
		return responses;
	}

}

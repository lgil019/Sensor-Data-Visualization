package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Survey;
import com.koios.server.repository.SurveyRepository;

@RestController
@CrossOrigin("http://localhost:3000")

public class SurveyController {
	@Autowired
	private SurveyRepository surveyRepository;
	
	/**
	 * Gets a list of all the {@code Survey} entries from the database
	 * @return {@code List}
	 */
	@GetMapping("/surveylist")
	public List<Survey> getSurveyList() {
		System.out.println("Retrieving all surveys...");
		return surveyRepository.findAll();
	}
}

package com.koios.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.FitbitHistory;
import com.koios.server.repository.FitbitRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class FitbitController {

	@Autowired
	private FitbitRepository fitbitRepository;
	
	private final Integer HOURS_IN_DAY = 24;
	private final Integer MINUTES_IN_DAY = HOURS_IN_DAY * 60;
	
	@GetMapping("/timeawake/{enrollmentId}")
	Double timeAwake(@PathVariable Integer enrollmentId) {
		FitbitHistory data = fitbitRepository.findDataById(enrollmentId);
		
		Integer timeSleeping = data.getTimeInBed();
		Integer timeAwake = MINUTES_IN_DAY - timeSleeping;
		Double percentage = (double) timeAwake/MINUTES_IN_DAY;
		return percentage;
	}
}

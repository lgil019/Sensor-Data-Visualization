package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Study;
import com.koios.server.repository.StudyRepository;

/**
 * Services the functionality to any {@docRoot Study} entries
 * @author Tony Erazo
 *
 */

@RestController
@CrossOrigin("http://localhost:3000")
public class StudyController {

	/**
	 * The StudyRepository
	 */
	@Autowired
	private StudyRepository studyRepository;
	
	/**
	 * Gets a list of all the {@code Study} entries from the database
	 * @return {@code List}
	 */
	@GetMapping("/study/studylist")
	public List<Study> getStudyList() {
		System.out.println("Retrieving all studies...");
		return studyRepository.findAll();
	}
}

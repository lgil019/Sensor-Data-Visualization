package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Survey;
import com.koios.server.repository.SurveyRepository;


/**
 * Services the functionality to any {@docRoot Survey} entries
 * @author Jonathan
 * @author Tony Erazo
 *
 */
@RestController
@CrossOrigin("http://localhost:3000")
public class SurveyController {
    @Autowired
    private SurveyRepository surveyRepository;

    /**
     * Gets a list of all the {@code Survey} entries from the database
     * @return {@code List}
     */
    @GetMapping("/study/{studyId}/surveylist/")
    public List<Survey> getSurveyList(@PathVariable Integer studyId) {
        List<Survey> surveys = surveyRepository.getSurveyList(studyId);
        return surveys;
    }
    
    @GetMapping("/study/{studyId}/surveys/{surveyId}/version/{publishedVersion}/")     
    public List<Survey> getSurveyVersion(@PathVariable Integer surveyId, @PathVariable Integer publishedVersion) {    
    	
    	System.out.println("Survey Id: " + surveyId + " published ver: " + publishedVersion);
    	List<Survey> versions = surveyRepository.getSurveyVersion(surveyId, publishedVersion);   
    	System.out.println("Size of list: " + versions.size());
    	for(Survey ver : versions) {
    		System.out.println("Version: " + ver.getPublished_version());
    	}
    	return versions;     
    }
}

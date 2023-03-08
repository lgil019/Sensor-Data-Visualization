package com.koios.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koios.server.model.Survey_summary;
import com.koios.server.repository.SurveyRepository;


/**
 * Services the functionality to any {@docRoot Survey} entries
 * @author Jonathan
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

    @GetMapping("/surveylist")
    public List<Survey_summary> getSurveyList() {
        System.out.println("Retrieving all surveys...");
        return surveyRepository.findAll();

    }

    @GetMapping("/study/surveys/{studyId}")
    public Survey_summary getSurvey(@PathVariable Integer studyId) {
        Survey_summary surveys = surveyRepository.findByStudyId(studyId);
        return surveys;
    }
}

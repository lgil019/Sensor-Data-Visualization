package com.koios.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.koios.server.model.Survey;


/**
 * Services the functionality to any {@docRoot Study} entries
 * @author Jonathan
 *
 */
@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
	
    public Survey findByStudyId(Integer studyId);
    
    @Query(value = "SELECT * FROM survey_summary WHERE study_id = :studyId", nativeQuery=true)
    public List<Survey> getSurveyList(@Param("studyId") Integer studyId);
    
    /*@Query(value = "SELECT id, published_version"
    		+ "FROM survey_summary, survey_task "
    		+ "WHERE survey_summary.id = survey_task.survey_id and survey_summary.published_version = survey_task.version", 
    		nativeQuery = true)
    public List<Survey> getSurveyVersion(@Param("surveyId") Integer surveyId, @Param("publishedVersion") Integer publishedVersion);*/
    

}
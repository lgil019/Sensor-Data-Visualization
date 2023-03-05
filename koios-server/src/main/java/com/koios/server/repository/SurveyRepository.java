package com.koios.server.repository;

import com.koios.server.model.Survey_summary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Services the functionality to any {@docRoot Study} entries
 * @author Jonathan
 *
 */
@Repository
public interface SurveyRepository extends JpaRepository<Survey_summary, Long> {
    public Survey_summary findByStudyId (Integer studyId);
}

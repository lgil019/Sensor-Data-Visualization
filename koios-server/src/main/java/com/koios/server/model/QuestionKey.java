package com.koios.server.model;

import javax.persistence.Column;
import java.io.Serializable;

public class QuestionKey implements Serializable {

@Column(name = "study_id")
    private Integer studyId;
    @Column(name = "survey_id")
    private Integer surveyId;

    private Integer version;
    @Column(name = "task_id")
    private String taskId;
}

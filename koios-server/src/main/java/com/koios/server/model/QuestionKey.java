package com.koios.server.model;

import java.io.Serializable;

import javax.persistence.Column;

public class QuestionKey implements Serializable {

	/**
	* 
	*/
	private static final long serialVersionUID = 1L;
	@Column(name = "study_id")
	private Integer studyId;
	@Column(name = "survey_id")
	private Integer surveyId;

	@SuppressWarnings("unused")
	private Integer version;
	@Column(name = "task_id")
	private Integer taskId;
}

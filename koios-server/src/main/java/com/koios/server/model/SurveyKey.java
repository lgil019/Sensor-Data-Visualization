package com.koios.server.model;

import java.io.Serializable;

import javax.persistence.Column;

public class SurveyKey implements Serializable {

	/**
	* 
	*/
	private static final long serialVersionUID = 1L;
	@Column(name = "study_id")
	private Integer studyId;
	@Column(name = "id")
	private Integer id;

}

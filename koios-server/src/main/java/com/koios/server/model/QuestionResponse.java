package com.koios.server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

/**
 * Contains the question answers (response)
 * 
 * @author Tony Erazo
 *
 */

@Entity
@IdClass(QuestionResponseKey.class)
@Table(name = "survey_response")
public class QuestionResponse {

	@Id
	@Column(name = "study_id")
	private Integer studyId;
	
	@Id
	@Column(name = "survey_id")
	private Integer surveyId;
	
	@Id
	@Column(name = "version")
	private Integer version;
	@Id
	@Column(name = "task_id")
	private Integer taskId;
	
	@Column(name = "response_type")
	private String responseType;

	@Column(name = "response")
	private String response;

	public Integer getStudyId() {
		return studyId;
	}

	public void setStudyId(Integer studyId) {
		this.studyId = studyId;
	}

	public Integer getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Integer surveyId) {
		this.surveyId = surveyId;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public Integer getTaskId() {
		return taskId;
	}

	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}
	
	public String getResponseType() {
		return responseType;
	}

	public void setResponseType(String responseType) {
		this.responseType = responseType;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public void setResponseCount() {
		this.response = response;
	}

    public char[] getResponseCount() {
        return null;
    }

}

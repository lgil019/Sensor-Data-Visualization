package com.koios.server.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "survey_task")
public class Question {

	//TODO add the rest of the values to match the database

    @Id
    @GeneratedValue
    private Integer id;


    @Column(name = "study_id")
    private Integer studyId;
    @Column(name = "survey_id")
    private Integer surveyId;
    private Integer version;
    @Column(name = "task_id")
    private String taskId;

	@Column(name = "task_text")
    private String question;
    private String type;
    @Column(name = "possible_input")
    private String answers;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public String getQuestion() {return question;}

    public void setQuestion(String question) {this.question = question;}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAnswers() {
        return answers;
    }

    public void setAnswers(String answers) {
        this.answers = answers;
    }
    
    public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
}

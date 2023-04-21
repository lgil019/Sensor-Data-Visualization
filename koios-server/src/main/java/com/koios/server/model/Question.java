package com.koios.server.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;


@Entity
@IdClass(QuestionKey.class)
@Table(name = "survey_task")
public class Question {

	//TODO add the rest of the values to match the database

@Id
    @Column(name = "study_id")
    private Integer studyId;
@Id
    @Column(name = "survey_id")
    private Integer surveyId;
@Id
    private Integer version;
@Id
    @Column(name = "task_id")
    private Integer taskId;

	@Column(name = "task_text")
    private String question;
    private String type;
    @Column(name = "possible_input")
	private String answers;
    
    @Column(name = "child_triggering_input")
	private String childTriggeringInput;

    private Integer parent_task_id;

    private Integer has_parent;
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
    
    public Integer getTaskId() {
		return taskId;
	}

	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}
	
    public String getChildTriggeringInput() {
		return childTriggeringInput;
	}

	public void setChildTriggeringInput(String childTriggeringInput) {
		this.childTriggeringInput = childTriggeringInput;
	}

    public Integer getParent_task_id() {
        return parent_task_id;
    }

    public void setParent_task_id(Integer parent_task_id) {
        this.parent_task_id = parent_task_id;
    }

    public Integer getHas_parent() {
        return has_parent;
    }

    public void setHas_parent(Integer has_parent) {
        this.has_parent = has_parent;
    }
}


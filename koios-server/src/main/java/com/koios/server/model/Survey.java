package com.koios.server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * The Survey class represents an SQL table entry of all the collection of
 * registered surveys on the server
 * 
 * @author Luis Gil
 *
 */
@Entity
@Table(name = "survey_summary")
public class Survey {

	@Id
	@GeneratedValue
	private Integer id;

	/**
	 * The name of the study
	 */
	@Column(name = "study_id")
	private Integer studyId;
	private String name;

	/**
	 * The organization running the study
	 */
	private String start_time;

	/**
	 * The description of the study
	 */
	private String end_time;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}
}
package com.koios.server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fitbit_history")
public class FitbitHistory {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String date;
	@Column(name = "enrollment_id")
	private Integer enrollmentId;
	@Column(name = "minutes_fairly_active")
	private Integer minutesLightActive;
	@Column(name = "minutes_sedentary")
	private Integer minutesSedentary;
	@Column(name = "minutes_very_active")
	private Integer minutesVeryActive;
	@Column(name = "participant_email")
	private String participantEmail;
	@Column(name = "time_in_bed")
	private Integer timeInBed;
	
	public Integer getMinutesLightActive() {
		return minutesLightActive;
	}

	public void setMinutesLightActive(Integer minutesLightActive) {
		this.minutesLightActive = minutesLightActive;
	}

	public Integer getMinutesSedentary() {
		return minutesSedentary;
	}

	public void setMinutesSedentary(Integer minutesSedentary) {
		this.minutesSedentary = minutesSedentary;
	}

	public Integer getMinutesVeryActive() {
		return minutesVeryActive;
	}

	public void setMinutesVeryActive(Integer minutesVeryActive) {
		this.minutesVeryActive = minutesVeryActive;
	}

	public String getParticipantEmail() {
		return participantEmail;
	}

	public void setParticipantEmail(String participantEmail) {
		this.participantEmail = participantEmail;
	}

	public Integer getTimeInBed() {
		return timeInBed;
	}

	public void setTimeInBed(Integer timeInBed) {
		this.timeInBed = timeInBed;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public Integer getEnrollmentId() {
		return enrollmentId;
	}
	public void setEnrollmentId(Integer enrollmentId) {
		this.enrollmentId = enrollmentId;
	}
}

package com.koios.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

public class Survey {
	
	@Id
	@GeneratedValue
	/**
	 * The identification digit of the survey
	 */
	private Integer id;
	
	/**
	 * The name of the survey
	 */
	private String name;
	
	/**
	 * The organization running the survey
	 */
	private String organization;
	
	/**
	 * The description of the survey
	 */
	private String description;
	
	/**
	 * The creator of the survey
	 */
	private String created_by;
	
	/**
	 * The creation date time stamp
	 */
	private String creation_time;
	
	/**
	 * time zone offset from the creation time
	 */
	private Integer creation_time_zone_offset;
	
	/**
	 * Current state of the study
	 */
	private Integer state;
	
	/**
	 * The timestamp set when the study was last modified
	 */
	private String modification_time;
	
	/**
	 * Offset timezone of the modified time stamp date
	 */
	private Integer modification_time_zone_offset;
	
	/**
	 * The type of survey
	 */
	private Integer survey_type;
	
	/**
	 * The instructions regarding to the study procedure
	 */
	private String instruction;
	
	/**
	 * Study icon URL
	 * Please refer to {@link https://en.wikipedia.org/wiki/Favicon} for more information
	 */
	private String icon_url;
	
	/**
	 * Flag value to identify data as anonymous
	 */
	private Integer anonymize_data;
	
	/**
	 * The invite code
	 */
	private String invite_code;
	
	/**
	 * The prefix of the user's email
	 */
	private String user_email_prefix;
	
	/**
	 * The number of users in the survey
	 */
	private Integer user_counter;
	
	/**
	 * Fitbit enabled flag
	 */
	private Integer fitbit_integration_enabled;
	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the organization
	 */
	public String getOrganization() {
		return organization;
	}
	/**
	 * @param organization the organization to set
	 */
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * @return the created_by
	 */
	public String getCreatedBy() {
		return created_by;
	}
	/**
	 * @param created_by the created_by to set
	 */
	public void setCreatedBy(String createdBy) {
		this.created_by = createdBy;
	}
	/**
	 * @return the creation_time
	 */
	public String getCreationTime() {
		return creation_time;
	}
	/**
	 * @param creation_time the creation_time to set
	 */
	public void setCreationTime(String creationTime) {
		this.creation_time = creationTime;
	}
	/**
	 * @return the creation_time_zone_offset
	 */
	public Integer getCreation_time_zone_offset() {
		return creation_time_zone_offset;
	}
	/**
	 * @param creation_time_zone_offset the creation_time_zone_offset to set
	 */
	public void setCreationTimeZoneOffset(Integer creationTimeZoneOffset) {
		this.creation_time_zone_offset = creationTimeZoneOffset;
	}
	/**
	 * @return the state
	 */
	public Integer getState() {
		return state;
	}
	/**
	 * @param state the state to set
	 */
	public void setState(Integer state) {
		this.state = state;
	}
	/**
	 * @return the modification_time
	 */
	public String getModificationTime() {
		return modification_time;
	}
	/**
	 * @param modification_time the modification_time to set
	 */
	public void setModificationTime(String modificationTime) {
		this.modification_time = modificationTime;
	}
	/**
	 * @return the modification_time_zone_offset
	 */
	public Integer getModificationTimeZoneOffset() {
		return modification_time_zone_offset;
	}
	/**
	 * @param modification_time_zone_offset the modification_time_zone_offset to set
	 */
	public void setModificationTimeZoneOffset(Integer modificationTimeZoneOffset) {
		this.modification_time_zone_offset = modificationTimeZoneOffset;
	}
	/**
	 * @return the survey_type
	 */
	public Integer getSurveyType() {
		return survey_type;
	}
	/**
	 * @param survey_type the survey_type to set
	 */
	public void setStudyType(Integer surveyType) {
		this.survey_type = surveyType;
	}
	/**
	 * @return the instruction
	 */
	public String getInstruction() {
		return instruction;
	}
	/**
	 * @param instruction the instruction to set
	 */
	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}
	/**
	 * @return the icon_url
	 */
	public String getIconUrl() {
		return icon_url;
	}
	/**
	 * @param icon_url the icon_url to set
	 */
	public void setIconUrl(String iconUrl) {
		this.icon_url = iconUrl;
	}
	/**
	 * @return the anonymize_data
	 */
	public Integer getAnonymizeData() {
		return anonymize_data;
	}
	/**
	 * @param anonymize_data the anonymize_data to set
	 */
	public void setAnonymizeData(Integer anonymizeData) {
		this.anonymize_data = anonymizeData;
	}
	/**
	 * @return the invite_code
	 */
	public String getInviteCode() {
		return invite_code;
	}
	/**
	 * @param invide_code the invide_code to set
	 */
	public void setInviteCode(String inviteCode) {
		this.invite_code = inviteCode;
	}
	/**
	 * @return the user_email_prefix
	 */
	public String getUserEmailPrefix() {
		return user_email_prefix;
	}
	/**
	 * @param user_email_prefix the user_email_prefix to set
	 */
	public void setUserEmailPrefix(String userEmailPrefix) {
		this.user_email_prefix = userEmailPrefix;
	}
	/**
	 * @return the user_counter
	 */
	public Integer getUserCounter() {
		return user_counter;
	}
	/**
	 * @param user_counter the user_counter to set
	 */
	public void setUser_counter(Integer userCounter) {
		this.user_counter = userCounter;
	}
	/**
	 * @return the fitbit_integration_enabled
	 */
	public Integer getFitbitIntegrationEnabled() {
		return fitbit_integration_enabled;
	}
	/**
	 * @param setFitbitIntegrationEnabled the fitbitIntegrationEnabled to set
	 */
	public void setFitbitIntegrationEnabled(Integer fitbitIntegrationEnabled) {
		this.fitbit_integration_enabled = fitbitIntegrationEnabled;
	}
}

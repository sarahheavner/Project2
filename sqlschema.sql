CREATE TABLE aq_poverty(
	us_state VARCHAR,
	county VARCHAR,
	year_end DATE,
	days_with_aqi INT,
	good_days INT,
	moderate_days INT,
	unhealthy_sensitive_days INT,
	unhealthy_days INT,
	very_unhealthy_days INT,
	hazardous_days INT,
	poverty_estimate INT,
	poverty_percentage DEC	
);

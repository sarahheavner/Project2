
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
	days_co INT,
	days_no2 INT,
	days_ozone INT,
	days_so2 INT,
	days_pm2 INT,
	days_pm10 INT,
	poverty_estimate INT,
	poverty_percentage DEC	
);

CREATE TABLE aq2016(
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
	max_aqi INT,
	ninetieth_percentile_aqi INT,
	median_aqi INT,
	days_co INT,
	days_no2 INT,
	days_ozone INT,
	days_so2 INT,
	days_pm2 INT,
	days_pm10 INT
);

CREATE TABLE aq2017(
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
	max_aqi INT,
	ninetieth_percentile_aqi INT,
	median_aqi INT,
	days_co INT,
	days_no2 INT,
	days_ozone INT,
	days_so2 INT,
	days_pm2 INT,
	days_pm10 INT
);

CREATE TABLE aq2018(
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
	max_aqi INT,
	ninetieth_percentile_aqi INT,
	median_aqi INT,
	days_co INT,
	days_no2 INT,
	days_ozone INT,
	days_so2 INT,
	days_pm2 INT,
	days_pm10 INT
);

CREATE TABLE aq2019(
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
	max_aqi INT,
	ninetieth_percentile_aqi INT,
	median_aqi INT,
	days_co INT,
	days_no2 INT,
	days_ozone INT,
	days_so2 INT,
	days_pm2 INT,
	days_pm10 INT
);

CREATE TABLE poverty2016(
	us_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

CREATE TABLE poverty2017(
	us_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

CREATE TABLE poverty2018(
	us_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

CREATE TABLE poverty2019(
	us_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

SELECT * FROM aq2016;
SELECT * FROM aq2017;
SELECT * FROM aq2018;
SELECT * FROM aq2019;
SELECT * FROM poverty2016;
SELECT * FROM poverty2017;
SELECT * FROM poverty2018;
SELECT * FROM poverty2019;
SELECT * FROM aq_poverty;
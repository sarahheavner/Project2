CREATE TABLE aq_poverty(
	us_state VARCHAR,
	county VARCHAR,
	days_with_aqi2019 INT,
	days_co2019 INT,
	days_no2_2019 INT,
	days_ozone2019 INT,
	days_so2_2019 INT,
	days_pm2_2019 INT,
	days_pm10_2019 INT,
	poverty_estimate2019 INT,
	poverty_percentage2019 DEC,	
	days_with_aqi2018 INT,
	days_co2018 INT,
	days_no2_2018 INT,
	days_ozone2018 INT,
	days_so2_2018 INT,
	days_pm2_2018 INT,
	days_pm10_2018 INT,
	poverty_estimate2018 INT,
	poverty_percentage2018 DEC,
	days_with_aqi2017 INT,
	days_co2017 INT,
	days_no2_2017 INT,
	days_ozone2017 INT,
	days_so2_2017 INT,
	days_pm2_2017 INT,
	days_pm10_2017 INT,
	poverty_estimate2017 INT,
	poverty_percentage2017 DEC,
	days_with_aqi2016 INT,
	days_co2016 INT,
	days_no2_2016 INT,
	days_ozone2016 INT,
	days_so2_2016 INT,
	days_pm2_2016 INT,
	days_pm10_2016 INT,
	poverty_estimate2016 INT,
	poverty_percentage2016 DEC
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
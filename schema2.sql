--Create 2016 data table
CREATE TABLE data2016(
	data_state VARCHAR,
	county VARCHAR,
	data_year DATE,
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
	days_so2 INT
);

--Create 2017 data table
CREATE TABLE data2017(
	data_state VARCHAR,
	county VARCHAR,
	data_year DATE,
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
	days_so2 INT
);

--Create 2018 data table
CREATE TABLE data2018(
	data_state VARCHAR,
	county VARCHAR,
	data_year DATE,
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
	days_so2 INT
);

--Create 2019 data table
CREATE TABLE data2019(
	data_state VARCHAR,
	county VARCHAR,
	data_year DATE,
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
	days_so2 INT
);

CREATE TABLE poverty2016(
	data_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

CREATE TABLE poverty2017(
	data_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

CREATE TABLE poverty2018(
	data_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);

CREATE TABLE poverty2019(
	data_state VARCHAR,
	county VARCHAR,
	poverty_estimate INT,
	poverty_percentage DEC
);


SELECT * FROM data2016;
SELECT * FROM data2017;
SELECT * FROM data2018;
SELECT * FROM data2019;
--Create 2010 data table
CREATE TABLE data2010(
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


--Create 2011 data table

CREATE TABLE data2011(
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


--Create 2012 data table
CREATE TABLE data2012(
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

--Create 2013 data table
CREATE TABLE data2013(
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


--Create 2014 data table
CREATE TABLE data2014(
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


--Create 2015 data table
CREATE TABLE data2015(
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


--Create 2020 data table
CREATE TABLE data2020(
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

--Verify that all tables imported csv data correctly
SELECT * FROM data2010
SELECT * FROM data2011
SELECT * FROM data2012
SELECT * FROM data2013
SELECT * FROM data2014
SELECT * FROM data2015
SELECT * FROM data2016
SELECT * FROM data2017
SELECT * FROM data2018
SELECT * FROM data2019
SELECT * FROM data2020
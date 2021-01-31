// connect to csv and log results in console
d3.csv("clean_data/combineddata.csv").then(function(aqipoverty) {
    console.log(aqipoverty);
});


// Use d3 to read csv data and append state abbreviations to dropdown menu
function init () {
        d3.csv("clean_data/combineddata.csv").then((data) => {
        data.us_state.forEach((state) => {
        d3.select("#selDataset").append("option")
                              .text(state)
                              .property("value", state);
        });
      });
}

//Create function that uses d3 to read csv data and append graphs
function chartInfo(statedata) {
    d3.csv("clean_data/combineddata.csv").then(function(aqipoverty) {
        console.log(aqipoverty);
        //convert all numerical data in csv file from string to integer
        aqipoverty.forEach(function(data) {
            data.days_with_aqi2019 = +data.days_with_aqi2019;
            data.good_days2019 = +data.good_days2019;	
            data.moderate_days2019 = +data.moderate_days2019,	
            data.unhealthy_sensitive_days2019 = +data.unhealthy_sensitive_days2019;	
            data.unhealthy_days2019	= +data.unhealthy_days2019;
            data.very_unhealthy_days2019 = +data.very_unhealthy_days2019;	
            data.hazardous_days2019 = +data.hazardous_days2019;	
            data.days_co2019 = +data.days_co2019;	
            data.days_no2_2019 = +data.days_no2_2019;
            data.days_ozone2019 = +data.days_ozone2019;	
            data.days_so2_2019 = +data.days_so2_2019;	
            data.days_pm2_2019 = +data.days_pm2_2019;	
            data.days_pm10_2019 = +data.days_pm10_2019;	
            data.poverty_estimate2019 = +data.poverty_estimate2019;	
            data.poverty_percentage2019 = +data.poverty_percentage2019;	
            data.days_with_aqi2018 = +data.days_with_aqi2018;	
            data.good_days2018 = +data.good_days2018;	
            data.moderate_days2018 = +data.moderate_days2018;	
            data.unhealthy_sensitive_days2018 = +data.unhealthy_sensitive_days2018;
            data.unhealthy_days2018 = +data.unhealthy_days2018;
            data.very_unhealthy_days2018 = +data.very_unhealthy_days2018;	
            data.hazardous_days2018 = +data.hazardous_days2018;	
            data.days_co2018 = +data.days_co2018;	
            data.days_no2_2018 = +data.days_no2_2018;	
            data.days_ozone2018 = +data.days_ozone2018;	
            data.days_so2_2018 = +data.days_so2_2018;	
            data.days_pm2_2018 = +data.days_pm2_2018;	
            data.days_pm10_2018 = +data.days_pm10_2018;	
            data.poverty_estimate2018 = +data.poverty_estimate2018;
            data.poverty_percentage2018 = +data.poverty_percentage2018;	
            data.days_with_aqi2017 = +data.days_with_aqi2017;	
            data.good_days2017 = +data.good_days2017;	
            data.moderate_days2017 = +data.moderate_days2017;	
            data.unhealthy_sensitive_days2017 = +data.unhealthy_sensitive_days2017;	
            data.unhealthy_days2017	 = +data.unhealthy_days2017;
            data.very_unhealthy_days2017 = +data.very_unhealthy_days2017;	
            data.hazardous_days2017	 = +data.hazardous_days2017;
            data.days_co2017 = +data.days_co2017;	
            data.days_no2_2017 = +data.days_no2_2017;	
            data.days_ozone2017 = +data.days_ozone2017;	
            data.days_so2_2017 = +data.days_so2_2017;	
            data.days_pm2_2017 = +data.days_pm2_2017;	
            data.days_pm10_2017	= +data.days_pm10_2017;
            data.poverty_estimate2017 = +data.poverty_estimate2017;	
            data.poverty_percentage2017	= +data.poverty_percentage2016;
            data.days_with_aqi2016 = +data.days_with_aqi2016;
            data.good_days2016 = +data.good_days2016;	
            data.moderate_days2016 = +data.moderate_days2016;	
            data.unhealthy_sensitive_days2016 = +data.unhealthy_sensitive_days2016;	
            data.unhealthy_days2016	 = +data.unhealthy_days2016;
            data.very_unhealthy_days2016 = +data.very_unhealthy_days2016;
            data.hazardous_days2016 = +data.hazardous_days2016;	
            data.days_co2016 = +data.days_co2016;	
            data.days_no2_2016 = +data.days_no2_2016;	
            data.days_ozone2016 = +data.days_ozone2016;	
            data.days_so2_2016 = +data.days_so2_2016;	
            data.days_pm2_2016 = +data.days_pm2_2016;	
            data.days_pm10_2016	= +data.days_pm10_2016;
            data.poverty_estimate2016 = +data.poverty_estimate2016;	
            data.poverty_percentage2016 = +data.poverty_percentage2016;


        });

    });
}

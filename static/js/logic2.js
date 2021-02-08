// connect to json data file and console.log results
d3.json("/clean_data/combineddata.json").then((data) => {
    console.log(data);
});

// Use d3 to read json data and state abbreviations to dropdown
function init () {
 //create list with unique state abbreviations 
 d3.json("/clean_data/combineddata.json").then((data) => {
   var unique = [];
   var state = [];
   for (var i = 0; i < data.length; i++) {
     if (!unique[data[i].us_state]) {
       state.push(data[i].us_state);
       unique[data[i].us_state] = 1;
   }}
   console.log(state);
   console.log(unique);
   //add each state abbreviation to dropdown menu
   state.forEach((state) => {
     d3.select("#selDataset").append("option")
     .text(state)
     .property("value", state);
   });
 });

 // list of years for second dropdown menu
 var chosenYear = [2019, 2018, 2017, 2016];
 //add each year to second dropdown menu
 chosenYear.forEach((chosenYear) => {
   d3.select("#selDataset2").append("option")
     .text(chosenYear)
     .property("value", chosenYear);

 });
   
 //initial chart filter 
 chartData("AL");
 chartYear(2019);
}


//function to filter data by state for charts
function chartData(stateData) {
 d3.json("/clean_data/combineddata.json").then((data) => {
   //filter data by state
   var filterChart = data.filter((firstState) => firstState.us_state == stateData);
   //set result as variable and log in console
   var initialChart = filterChart;
   console.log(initialChart);

   //create variable for barchart
   var county = [];
   var coDays = [];
   var no2Days = [];
   var ozoneDays = [];
   var so2Days = [];
   var pm2Days = [];
   var pm10Days = [];

   //create variable for linechart
   var povertyPercent = [];
   // var aqiTotal2019 = [];
   var good_days = [];
   var moderate_days = [];
   var unhealthy_sensitive_days = [];
   var unhealthy_days = [];
   var very_unhealthy_days = [];
   var hazardous_days = [];

  

   //log filtered results in console
   console.log(county);
   console.log(coDays);
   console.log(no2Days);
   console.log(ozoneDays);
   console.log(so2Days);
   console.log(pm2Days);
   console.log(pm10Days);
   console.log(povertyPercent);
   // console.log(aqiTotal2019);
   console.log(good_days);
   console.log(moderate_days);
   console.log(unhealthy_sensitive_days);
   console.log(unhealthy_days);
   console.log(very_unhealthy_days);
   console.log(hazardous_days);

   //inital charts

   //stacked bar chart
   //aqi days breakdown per county of filtered state 
   var cotrace= {
     x: county,
     y: coDays,
     name: "CO Days",
     type: "bar"
   };

   var no2trace = {
     x: county,
     y: no2Days,
     name: "NO2 Days",
     type: "bar"
   };

   var ozonetrace = {
     x: county,
     y: ozoneDays,
     name: "Ozone Days",
     type: "bar"
   };

   var so2trace = {
     x: county,
     y: so2Days,
     name: "SO2 Days",
     type: "bar"
   };

   var pm2trace = {
     x: county,
     y: pm2Days,
     name: "PM2.5 Days",
     type: "bar"
   };

   var pm10trace = {
     x: county,
     y: pm10Days,
     name: "PM10 Days",
     type: "bar"
   };

   var povertytrace = {
     x: county,
     y: povertyPercent,
     name: "Poverty Percentage",
     type: "scatter"
   }

   var data = [cotrace, no2trace, ozonetrace, so2trace,pm2trace, pm10trace, povertytrace];

   var layout = {
     barmode: "stack",
     title: "Pollutant Breakdown Per County"
   };
   
   Plotly.newPlot("bar", data, layout);


   //line chart
   //total aqi days vs poverty percentage for filtered stateData
   var povertytrace = {
     x: county,
     y: povertyPercent,
     name: "Poverty Percentage",
     type: "scatter"
   };
   
   var hazardousDaysTrace = {
     x: county,
     y: hazardous_days,
     name: "Hazardous Days",
     type: "scatter"
   };

   var veryUnhealthyTrace = {
     x: county,
     y: very_unhealthy_days,
     name: "Very Unhealthy Days",
     type: "scatter"
   }

   var unhealthyTrace = {
     x: county, 
     y: unhealthy_days,
     name: "Unhealthy Days",
     type: "scatter"
   }

   var unhealthySensitiveTrace = {
     x: county,
     y: unhealthy_sensitive_days,
     name: "Unhealthy Sensitive Days",
     type: "scatter"
   }

   var moderateTrace = {
     x: county,
     y: moderate_days,
     name: "Moderate Days",
     type: "scatter"
   }

   var goodTrace = {
     x: county,
     y: good_days,
     name: "Good Days",
     type: "scatter"
   }
   
   var scatterdata = [povertytrace, hazardousDaysTrace, veryUnhealthyTrace, unhealthyTrace, unhealthySensitiveTrace, moderateTrace, goodTrace]
   
   Plotly.newPlot('line', scatterdata);

 })
}

function chartYear(chosenYear) {
    d3.json("/clean_data/combineddata.json").then((data) => {
        var chosenYear = [2019, 2018, 2017, 2016];

        //create variable for barchart
        var county = [];
        var coDays = [];
        var no2Days = [];
        var ozoneDays = [];
        var so2Days = [];
        var pm2Days = [];
        var pm10Days = [];

        //create variable for linechart
        var povertyPercent = [];
        // var aqiTotal2019 = [];
        var good_days = [];
        var moderate_days = [];
        var unhealthy_sensitive_days = [];
        var unhealthy_days = [];
        var very_unhealthy_days = [];
        var hazardous_days = [];
        
        
        if (chosenYear === 2019) {
            for (var i = 0; i < data.length; i++) {
                //bar chart
                county.push(data[i].county);
                coDays.push(data[i].days_co2019);
                no2Days.push(data[i].days_no2_2019);
                ozoneDays.push(data[i].days_ozone2019);     
                so2Days.push(data[i].days_so2_2019);
                pm2Days.push(data[i].days_pm2_2019);
                pm10Days.push(data[i].days_pm10_2019);
                //line chart
                povertyPercent.push(data[i].poverty_percentage2019);
                // aqiTotal2019.push(initialChart[i].days_with_aqi2019);
                good_days.push(data[i].good_days2019);
                moderate_days.push(data[i].moderate_days2019);
                unhealthy_sensitive_days.push(data[i].unhealthy_sensitive_days2019);
                unhealthy_days.push(data[i].unhealthy_days2019);
                very_unhealthy_days.push(data[i].very_unhealthy_days2019);
                hazardous_days.push(data[i].hazardous_days2019);
            };
        }

        else if (chosenYear === 2018) {
            for (var i = 0; i < data.length; i++) {
                //bar chart
                county.push(data[i].county);
                coDays.push(data[i].days_co2018);
                no2Days.push(data[i].days_no2_2018);
                ozoneDays.push(data[i].days_ozone2018);     
                so2Days.push(data[i].days_so2_2018);
                pm2Days.push(data[i].days_pm2_2018);
                pm10Days.push(data[i].days_pm10_2018);
                //line chart
                povertyPercent.push(data[i].poverty_percentage2018);
                // aqiTotal2019.push(initialChart[i].days_with_aqi2019);
                good_days.push(data[i].good_days2018);
                moderate_days.push(data[i].moderate_days2018);
                unhealthy_sensitive_days.push(data[i].unhealthy_sensitive_days2018);
                unhealthy_days.push(data[i].unhealthy_days2018);
                very_unhealthy_days.push(data[i].very_unhealthy_days2018);
                hazardous_days.push(data[i].hazardous_days2018);
            };
        }

        else if (chosenYear === 2017) {
            for (var i = 0; i < data.length; i++) {
                //bar chart
                county.push(data[i].county);
                coDays.push(data[i].days_co2017);
                no2Days.push(data[i].days_no2_2017);
                ozoneDays.push(data[i].days_ozone2017);     
                so2Days.push(data[i].days_so2_2017);
                pm2Days.push(data[i].days_pm2_2017);
                pm10Days.push(data[i].days_pm10_2017);
                //line chart
                povertyPercent.push(data[i].poverty_percentage2017);
                // aqiTotal2019.push(initialChart[i].days_with_aqi2019);
                good_days.push(data[i].good_days2017);
                moderate_days.push(data[i].moderate_days2017);
                unhealthy_sensitive_days.push(data[i].unhealthy_sensitive_days2017);
                unhealthy_days.push(data[i].unhealthy_days2017);
                very_unhealthy_days.push(data[i].very_unhealthy_days2017);
                hazardous_days.push(data[i].hazardous_days2017);
            };
        }
        else {
            for (var i = 0; i < data.length; i++) {
                //bar chart
                county.push(data[i].county);
                coDays.push(data[i].days_co2016);
                no2Days.push(data[i].days_no2_2016);
                ozoneDays.push(data[i].days_ozone2016);     
                so2Days.push(data[i].days_so2_2016);
                pm2Days.push(data[i].days_pm2_2016);
                pm10Days.push(data[i].days_pm10_2016);
                //line chart
                povertyPercent.push(data[i].poverty_percentage2016);
                // aqiTotal2019.push(initialChart[i].days_with_aqi2019);
                good_days.push(data[i].good_days2016);
                moderate_days.push(data[i].moderate_days2016);
                unhealthy_sensitive_days.push(data[i].unhealthy_sensitive_days2016);
                unhealthy_days.push(data[i].unhealthy_days2016);
                very_unhealthy_days.push(data[i].very_unhealthy_days2016);
                hazardous_days.push(data[i].hazardous_days2016);
            };
            
        }
        // updatePlotly(year);
        console.log(ozoneDays);
    });
}
  

//function to update charts when new state is selected
function optionChanged(stateData) {
    chartData(stateData);
};

function getData(chosenYear) {
    chartYear(chosenYear);
};


init()
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

  var year = [2019, 2018, 2017, 2016];

  year.forEach((year) => {
    d3.select("#selDataset2").append("option")
      .text(year)
      .property("value", year);

  });
    
  //initial chart filter 
  chartData("AL");
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

    // loop through filtered state data and push values to variables 
    for (var i = 0; i < initialChart.length; i++) {
      //bar chart
      county.push(initialChart[i].county);
      coDays.push(initialChart[i].days_co2019);
      no2Days.push(initialChart[i].days_no2_2019);
      ozoneDays.push(initialChart[i].days_ozone2019);     
      so2Days.push(initialChart[i].days_so2_2019);
      pm2Days.push(initialChart[i].days_pm2_2019);
      pm10Days.push(initialChart[i].days_pm10_2019);
      //line chart
      povertyPercent.push(initialChart[i].poverty_percentage2019);
      // aqiTotal2019.push(initialChart[i].days_with_aqi2019);
      good_days.push(initialChart[i].good_days2019);
      moderate_days.push(initialChart[i].moderate_days2019);
      unhealthy_sensitive_days.push(initialChart[i].unhealthy_sensitive_days2019);
      unhealthy_days.push(initialChart[i].unhealthy_days2019);
      very_unhealthy_days.push(initialChart[i].very_unhealthy_days2019);
      hazardous_days.push(initialChart[i].hazardous_days2019);

      
    }
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

function optionChanged(stateData) {
  chartData(stateData);
};

init()

// connect to json data file and console.log results
d3.json("/clean_data/combineddata.json").then((data) => {
     console.log(data);
});

// Use d3 to read json data and state abbreviations to dropdown
function init () {
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
    d3.select("#selDataset").append("option")
    .text(state)
    .property("value", state);
  });
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
    var coDays2019 = [];
    var no2Days2019 = [];
    var ozoneDays2019 = [];
    var so2Days2019 = [];
    var pm2Days2019 = [];
    var pm10Days2019 = [];

    //create variable for linechart
    var povertyPercent2019 = [];
    var aqiTotal2019 = [];

    // loop through filtered state data and push values to variables 
    for (var i = 0; i < initialChart.length; i++) {
      //bar chart
      county.push(initialChart[i].county);
      coDays2019.push(initialChart[i].days_co2019);
      no2Days2019.push(initialChart[i].days_no2_2019);
      ozoneDays2019.push(initialChart[i].days_ozone2019);     
      so2Days2019.push(initialChart[i].days_so2_2019);
      pm2Days2019.push(initialChart[i].days_pm2_2019);
      pm10Days2019.push(initialChart[i].days_pm10_2019);
      //line chart
      povertyPercent2019.push(initialChart[i].poverty_percentage2019);
      aqiTotal2019.push(initialChart[i].days_with_aqi2019);
      
    }
    //log filtered results in console
    console.log(county);
    console.log(coDays2019);
    console.log(no2Days2019);
    console.log(ozoneDays2019);
    console.log(so2Days2019);
    console.log(pm2Days2019);
    console.log(pm10Days2019);
    console.log(povertyPercent2019);
    console.log(aqiTotal2019);

    //inital charts

    //stacked bar chart
    //aqi days breakdown per county of filtered state 
    var cotrace= {
      x: county,
      y: coDays2019,
      name: "CO Days",
      type: "bar"
    };

    var no2trace = {
      x: county,
      y: no2Days2019,
      name: "NO2 Days",
      type: "bar"
    };

    var ozonetrace = {
      x: county,
      y: ozoneDays2019,
      name: "Ozone Days",
      type: "bar"
    };

    var so2trace = {
      x: county,
      y: so2Days2019,
      name: "SO2 Days",
      type: "bar"
    };

    var pm2trace = {
      x: county,
      y: pm2Days2019,
      name: "PM2.5 Days",
      type: "bar"
    };

    var pm10trace = {
      x: county,
      y: pm10Days2019,
      name: "PM10 Days",
      type: "bar"
    };

    var data = [cotrace, no2trace, ozonetrace, so2trace,pm2trace, pm10trace];

    var layout = {
      barmode: "stack",
      title: "Air Quality Measurements Per County"
    };
    
    Plotly.newPlot("bar", data, layout);

  })
}





init()




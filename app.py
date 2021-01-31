#Import dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

import datetime as dt

#Database setup
engine = create_engine("sqlite:///data.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Poverty = Base.classes.poverty2019


#Flask setup
app = Flask(__name__)

#Set Flask Routes
#Create route to home
@app.route('/')
def home():
    """list all available API routes"""
    return(
        f"Available Routes:<br/>"
        f"2019 Air Quality: /api/v1.0/airquality2019<br/>"
        f"2019 Poverty Levels: /api/v1.0/poverty2019<br/>"
    )
    
#Create route for poverty data
@app.route('/api/v1.0/poverty2019')  
def poverty():
    """Convert the query results to a dictionary using date as the key and prcp as the value"""
    #Create session between Python and database
    session = Session(engine)

    #Query for poverty data
    povrates = session.query(Poverty.data_state, Poverty.county, Poverty.poverty_estimate, Poverty.poverty_percentage).all()

    #Close session
    session.close()

    #Create list / dictionary to store results
    poverty_rates = []
    for data_state, county, poverty_estimate, poverty_percentage in povrates:
        poverty_dict={}
        poverty_dict['state'] = data_state
        poverty_dict['county'] = county
        poverty_dict['poverty_estimate'] = poverty_estimate
        poverty_dict['poverty_percentage'] = poverty_percentage
        poverty_rates.append(poverty_dict)

    #Return responses in JSON format
    return jsonify(poverty_rates)

if __name__ == '__main__':
    app.run(debug=True)
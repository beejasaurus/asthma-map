import React from 'react';
import DataSquare from '../DataSquare';

const AqiData = ({aqi}) => {
    if (! aqi) return null;

    const aqiLength = aqi.aqi.length;
    const unhealthyDays = parseInt((aqi.aqi.reduce((a, b) => a + b.unhealthy_days, 0) / aqiLength), 10);
    const veryUnhealthyDays = parseInt((aqi.aqi.reduce((a, b) => a + b.very_unhealthy_days, 0) / aqiLength), 10);
    const sensitiveUnhealthyDays = parseInt((aqi.aqi.reduce((a, b) => a + b.unhealthy_sensitive_groups_days, 0) / aqiLength), 10);
    const totalUnhealthyDays = unhealthyDays + veryUnhealthyDays + sensitiveUnhealthyDays;
    return (
        <section className="komodo-data-block">
            <header>
                <h3>Air Quality Averages</h3>
            </header>
            <main>
                <DataSquare title="Days with AQI" value={parseInt((aqi.aqi.reduce((a,b) => a + b.days_with_aqi,0) / aqiLength),10)}/>
                <DataSquare title="Good Days" value={parseInt((aqi.aqi.reduce((a,b) => a + b.good_days,0) / aqiLength),10)}/>
                <DataSquare title="Moderate Days" value={parseInt((aqi.aqi.reduce((a,b) => a + b.moderate_days,0) / aqiLength),10)}/>
                <DataSquare title="Unhealthy Days" value={totalUnhealthyDays}/>
                <DataSquare title="Hazardous Days" value={parseInt((aqi.aqi.reduce((a,b) => a + b.hazardous_days,0) / aqiLength),10)}/>
            </main>
        </section>
    );
};

export default AqiData;

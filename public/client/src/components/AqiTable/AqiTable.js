import React from 'react';
import './AqiTable.css';

const AqiTable = ({aqi, activeCounty, onClickRow}) => aqi && (
    <section className="komodo-table-container">
        <header>
            <h3>County Air Quality</h3>
        </header>
        <main>
            <table className="komodo-aqi-table">
                <thead>
                <tr>
                    <th>County</th>
                    <th>Days with AQI</th>
                    <th>Good Days</th>
                    <th>Moderate Days</th>
                    <th>Days Unhealthy for Sensitive Groups</th>
                    <th>Unhealthy Days</th>
                    <th>Very Unhealthy Days</th>
                    <th>Hazardous Days</th>
                    {/*<th>Max AQI</th>*/}
                    {/*<th>Days CO2</th>*/}
                    {/*<th>Days NO2</th>*/}
                    {/*<th>Days Ozone</th>*/}
                    {/*<th>Days SO2</th>*/}
                    {/*<th>Days PM2.5</th>*/}
                    {/*<th>Days PM10</th>*/}
                </tr>
                </thead>
                <tbody>
                {aqi.aqi.map(row => (
                    <tr
                        key={row.id}
                        className={activeCounty && activeCounty === row.county ? 'komodo-active' : ''}
                        onClick={() => onClickRow(row.county)}
                    >
                        <td>{row.county}</td>
                        <td>{row.days_with_aqi}</td>
                        <td>{row.good_days}</td>
                        <td>{row.moderate_days}</td>
                        <td>{row.unhealthy_sensitive_groups_days}</td>
                        <td>{row.unhealthy_days}</td>
                        <td>{row.very_unhealthy_days}</td>
                        <td>{row.hazardous_days}</td>
                        {/*<td>{row.max_aqi}</td>*/}
                        {/*<td>{row.days_co}</td>*/}
                        {/*<td>{row.days_no2}</td>*/}
                        {/*<td>{row.days_ozone}</td>*/}
                        {/*<td>{row.days_so2}</td>*/}
                        {/*<td>{row.days_pm25}</td>*/}
                        {/*<td>{row.days_pm10}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    </section>
);

export default AqiTable;

import React from 'react';
import DataSquare from '../DataSquare';
import './AsthmaData.css';

const AsthmaData = (props) => props.asthmaPrevalence && (
    <section className="komodo-data-block">
        <header>
            <h3>Asthma Statistics</h3>
        </header>
        <main>
            <DataSquare
                title="Number of Adults"
                value={props.asthmaPrevalence.current_asthma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            />

            <DataSquare
                title="Percent of Adults"
                value={(props.asthmaPrevalence.percent_asthma * 100).toFixed() + '%'}
            />

            <DataSquare
                title="Deaths"
                value={props.asthmaPrevalence.deaths || 'Unreliable'}
            />

            <DataSquare
                title="Death Rate / Million"
                value={props.asthmaPrevalence.death_rate_per_million || 'Unreliable'}
            />
        </main>
    </section>
);

export default AsthmaData;
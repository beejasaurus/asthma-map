import React from 'react';
import StateTerritoryMap from '../../components/StateTerritoryMap';
import AsthmaData from '../../components/AsthmaData';
import AqiData from '../../components/AqiData';
import AqiTable from '../../components/AqiTable';

export default class StateTerritory extends React.Component {
    constructor(props) {
        super(props);
        this.fetchStateTerritoryAqi = this.fetchStateTerritoryAqi.bind(this);
        this.fetchStateTerritoryGeoJson = this.fetchStateTerritoryGeoJson.bind(this);
        this.setActiveStateTerritory = this.setActiveStateTerritory.bind(this);
    }

    componentDidMount(props) {
        this.fetchStateTerritoryAqi();
        this.fetchStateTerritoryGeoJson();
        this.setActiveStateTerritory();
    }

    componentWillUpdate(props) {
        const newStateTerritory = props.match.params.state_territory
        if(newStateTerritory !== props.activeStateTerritory) {
            this.fetchStateTerritoryAqi();
            this.fetchStateTerritoryGeoJson();
            this.setActiveStateTerritory();
        }
    }

    fetchStateTerritoryAqi() {
        this.props.fetchStateTerritoryAqi(this.props.match.params.state_territory);
    }

    fetchStateTerritoryGeoJson() {
        this.props.fetchStateTerritoryGeoJson(this.props.match.params.state_territory);
    }

    setActiveStateTerritory() {
        this.props.setActiveStateTerritory(this.props.match.params.state_territory);
    }

    render() {
        const {match} = this.props;
        return (
            <section className="komodo-state-territory">
                <h2>{match.params.state_territory}</h2>
                <div className="komodo-grid-row">
                    <div className="komodo-grid-half">
                        <StateTerritoryMap/>
                    </div>
                    <div className="komodo-grid-half">
                        <AsthmaData/>
                        <AqiData/>
                    </div>
                </div>
                <div className="komodo-grid-row">
                    <div className="komodo-grid-all">
                        <AqiTable/>
                    </div>
                </div>
            </section>
        );
    }

}

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Home from './Home';
import Sample from './StateTerritory';
import ListLink from '../components/ListLink';
import './index.css';

const Routes = ({statesTerritories}) => (
    <Router>
        <div className="komodo">
            {/*<h1>Asthma Air Quality Indicators</h1>*/}

            <main className="komodo-main">
                <Route exact path="/" component={Home}/>
                <Route path="/state/:state_territory" component={Sample}/>
            </main>

            <nav className="komodo-nav">
                <ul>
                    <ListLink exact className="komodo-nav-item" activeClassName="komodo-active" to="/">Home</ListLink>
                    {statesTerritories.map((st, key) => <ListLink key={key} className="komodo-nav-item" activeClassName="komodo-active" to={`/state/${st}`}>{st}</ListLink>)}
                </ul>
            </nav>
        </div>
    </Router>
);

export default Routes;
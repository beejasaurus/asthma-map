import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import Home from './Home';
import Sample from './Sample';

const Routes = ({statesTerritories}) => (
    <Router>
        <div className="komodo">
            <nav className="komodo-nav">
                <ul>
                    <li className="komodo-nav-item"><Link to="/">Home</Link></li>
                    {statesTerritories.map((st, key) => <li key={key} className="komodo-nav-item"><Link to={`/state/${st}`}>{st}</Link></li>)}
                </ul>
            </nav>

            <main className="komodo-main">
                <Route exact path="/" component={Home}/>
                <Route path="/state/:state_territory" component={Sample}/>
            </main>
        </div>
    </Router>
);

export default Routes;
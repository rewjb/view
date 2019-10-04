import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Test2 from './Test2';

const Test = () => (
    <Router>
        <div>
            <Link to="/uyguyg">숫자야구</Link>
            <Switch>
                <Route path="/" component={Test2}/>
            </Switch>
        </div>
    </Router>
);

export default Test;
import React from 'react';
import AppShell from './AppShell';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Text from './Text';
import Words from './Words';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <AppShell>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/text" component={Text} />
                            <Route exact path="/words" component={Words} />
                        </div>
                    </AppShell>
                </Router>
            </div>
        );
    }
}

export default App;

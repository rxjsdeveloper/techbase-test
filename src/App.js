import React from 'react';
import './App.css';
import {StateProvider} from './context';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/home';

function App() {
  return (
    <div className="App">
        <StateProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        </StateProvider>
    </div>
  );
}

export default App;

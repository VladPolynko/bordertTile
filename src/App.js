import React from 'react';
import {connect} from 'react-redux'

import Game from './container/Game';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <Game />
        </div>
    );
};

export default connect()(App);

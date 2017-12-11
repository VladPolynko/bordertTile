import React, {Component } from 'react';
import {connect} from 'react-redux';

import Tile from '../customComponent/Tile';

import { initialTiles, clickTile } from '../actions/gameAction';

import './Game.css';

class Game extends Component {
    constructor(props){
        super(props);

        this.props.initialTiles();
    }

    render() {
        return (
            <div className="game">
                <button onClick={() => this.props.initialTiles()}>RESET GAME</button>
                { this.props.finish && <div className="titleWin">You Win</div> }
                <div className="tiles">
                    {
                        this.props.tiles.map(tile => (
                            <Tile
                                key={tile.id}
                                tile={tile}
                                onClick={this.props.clickTile.bind(this, tile)}
                                focusTile={this.props.focusTile}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default connect(store => ({
    game: store.game,
    tiles: store.game.tiles,
    stepGame: store.game.stepGame,
    focusTile: store.game.focusTile,
    finish: store.game.finish,
}), {
    initialTiles,
    clickTile,
})(Game);

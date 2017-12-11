import React from 'react';

import './Tile.css';

const Tile = ({ tile, onClick, focusTile }) => {
    function select() {
        const { tileFirst = undefined, tileTwo = undefined } = focusTile;

        if(tileFirst && tileFirst.id === tile.id) {
            return true;
        } else if(tileTwo && tileTwo.id === tile.id) {
            return true;
        }

        return false;
    }

    if (tile.disable) {
        return (
            <div className="tileContainer">
                <div className="tileFlipper">
                    <div className="tile disable tileFront" />
                </div>
            </div>
        );
    }

    return (
        <div className={ select() ? "tileContainer tileContainerHover" : "tileContainer"}>
            <div className="tileFlipper">
                <div
                    onClick={ onClick }
                    className="tile tileFront"
                />

                <div
                    onClick={ onClick }
                    className="tile tileBack"
                    style={{background: tile.color}}
                />
            </div>
        </div>
    );
};

export default Tile;

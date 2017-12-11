import tilesGenerator from '../utils/tilesGenerator';
import {randomColorsArrays} from '../config/color';

export const INITIAL_GAME = 'INITIAL_GAME';
export const STEP_GAME = 'STEP_GAME';
export const ADD_FOCUS_TILE_FIRST = 'ADD_FOCUS_TILE_FIRST';
export const ADD_FOCUS_TILE_TWO = 'ADD_FOCUS_TILE_TWO';
export const DELETE_FOCUS_TILE = 'DELETE_FOCUS_TILE';
export const SET_TILE_CHANGE = 'SET_TILE_CHANGE';

export const initialTiles = () => {
    const initialTiles = tilesGenerator(randomColorsArrays);

    return {
        type: INITIAL_GAME,
        initialTiles,
    };
};

export const clickTile = tile => (dispatch, getState) => {
    const gameStore = getState().game;
    const focusTileFirst = gameStore.focusTile.tileFirst;
    const focusTileTwo = gameStore.focusTile.tileTwo;

    if (!focusTileFirst) {
        dispatch(addFocusTileFirst(tile));
    } else if (!focusTileTwo) {
        const indexFocusTile = focusTileFirst.id - 1;
        const indexActionTile = tile.id - 1;

        if (focusTileFirst.id === tile.id) {
            return null;
        }

        dispatch(addFocusTileTwo(tile));

        if (focusTileFirst.color === tile.color) {
            setTimeout(() => {
                dispatch(setTileChange(indexFocusTile, indexActionTile));
            }, 600);

        } else {
            setTimeout(() => {
                dispatch(deleteFocusTile(indexFocusTile, indexActionTile))
            }, 1500);
        }
    }
};

export const addFocusTileFirst = tile => ({
    type: ADD_FOCUS_TILE_FIRST,
    tile,
});
export const addFocusTileTwo = tile => ({
    type: ADD_FOCUS_TILE_TWO,
    tile,
});

export const deleteFocusTile = () => ({
    type: DELETE_FOCUS_TILE,
});

export const setTileChange = (indexTileFirst, indexTileTwo) => ({
    type: SET_TILE_CHANGE,
    indexTileFirst,
    indexTileTwo,
});
import { INITIAL_GAME, STEP_GAME, ADD_FOCUS_TILE_FIRST, ADD_FOCUS_TILE_TWO, DELETE_FOCUS_TILE, SET_TILE_CHANGE } from '../actions/gameAction';
import finishGame from '../utils/finishGame';

const initialState = {
    tiles: [],
    focusTile: {
        tileFirst: undefined,
        tileTwo: undefined,
    },
    finish: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_GAME:
            return {
                ...initialState,
                tiles: action.initialTiles,
            };
        case STEP_GAME:
            return {
                ...initialState,
                stepGame: ++state.stepGame,
            };
        case ADD_FOCUS_TILE_FIRST:
            return {
                ...state,
                focusTile: {
                    ...state.focusTile,
                    tileFirst: action.tile,
                },
            };
        case ADD_FOCUS_TILE_TWO:
            return {
                ...state,
                focusTile: {
                    ...state.focusTile,
                    tileTwo: action.tile,
                },
            };
        case DELETE_FOCUS_TILE:
            return {
                ...state,
                focusTile: initialState.focusTile,
            };
        case SET_TILE_CHANGE:
            const tilesResult = state.tiles;
            tilesResult[action.indexTileFirst].disable = true;
            tilesResult[action.indexTileTwo].disable = true;
            const isFinish = finishGame(tilesResult);

            return {
                ...state,
                focusTile: initialState.focusTile,
                tiles: [...tilesResult],
                finish: isFinish,
            };

        default:
            return state;
    }
}
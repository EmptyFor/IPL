import * as types from '../types/index';

const initState = {
    index: '',
    count: 10
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_ROW_INDEX:
            return {
                ...state,
                index: action.index
            }
        case types.GET_COMPLETED_TASK:
            return {
                ...state,
                count: action.count
            }

        default:
            return state;
    };
};

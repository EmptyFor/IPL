import * as types from '../types/index';

export const dispatchRowNumber = (index) => ({
    type: types.GET_ROW_INDEX,
    index
})

export const dispatchCompletedTask = (count) => ({
    type: types.GET_COMPLETED_TASK,
    count
})
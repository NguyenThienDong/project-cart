import * as types from '../constants/ActionTypes';
// import * as Message from '../constants/Message';

var initialState = 'Chào mừng bạn đến với Website';

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default:
            return [...state];
    }
};

export default message;

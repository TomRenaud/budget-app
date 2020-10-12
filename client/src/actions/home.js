import { actionTypes } from '../reducers/home';

export const setBackup = backup => dispatch => {
    return dispatch({
        type: actionTypes.BACKUP,
        backup
    });
};
const backupInitialState = {
    credit: 0,
    debit: 0,
    balance: 0,
    wages: [],
    charges: [],
    transactions: []
};

export const actionTypes = {
    BACKUP: "BACKUP"
};

export const backup = (
    state = backupInitialState,
    action
) => {
    switch (action.type) {
        case actionTypes.BACKUP:
            return action.backup;
        default:
            return state;
    }
};


const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_LAUNCHES':
            return { ...state, loading: true };
        case 'LAUNCHES_RECEIVED':
            return { ...state, launches: action.data, counter: action.counter, loading: false }
        case 'LAUNCHES_REQUEST_FAILED':
            return { ...state, launches: null, counter: -1, loading: false }
        case 'GET_LAUNCH_DATA':
            return { ...state, loading: true, launchId: action.launchId };
        case 'LAUNCH_DATA_RECEIVED':
            return { ...state, launch: action.data, loading: false }
        case 'LAUNCH_DATA_REQUEST_FAILED':
            return { ...state, launch: null, loading: false }
        default:
            return state;
    }
};

export default reducer;
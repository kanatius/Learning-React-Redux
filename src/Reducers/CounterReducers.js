const counterReducer = (state = { counter: 0 }, action) => {

    var currentCount = state.counter;

    switch (action.type) {
        case "INC":
            return Object.assign(state,
                { counter: currentCount + parseInt(action.value) });
        case "DEC":
            return Object.assign(state,
                { counter: currentCount - parseInt(action.value) });
        default:
            return state;
    }
}

export default counterReducer;
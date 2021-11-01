export function onIncrement(value) {
    return {
        type: "INC",
        value
    }
}
export function onDecrement(value) {
    return {
        type: "DEC",
        value
    }
}
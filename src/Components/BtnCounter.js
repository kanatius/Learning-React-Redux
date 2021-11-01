import React from "react";
import store from "../Store/Store";
import { onDecrement, onIncrement } from "../Actions/Actions";

class BtnCounter extends React.Component{


    incrementCounter(){
        store.dispatch(onIncrement(1));
    }

    decrementCounter(){
        store.dispatch(onDecrement(1));
    }

    render(){
        return (
            <>
                <button onClick={this.incrementCounter}>Incrementar Contador</button>
                <button onClick={this.decrementCounter}>Decrementar Contador</button>
            </>
        );
    }
}

export default BtnCounter;
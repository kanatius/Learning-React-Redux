import React from "react";
import store from "../Store/Store";
import BtnCounter from "./BtnCounter";

class HomePage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        store.subscribe(this.listenStore);
    }

    listenStore = () => {
        console.log(store.getState());

        let counter = store.getState().counter;

        if (this.state.counter !== counter) {
            this.setState({ counter: counter })
        }
    }

    render() {
        return (
            <React.Fragment>
                Counter: {this.state.counter}
                <BtnCounter />
            </React.Fragment>
        );
    }
}

export default HomePage;
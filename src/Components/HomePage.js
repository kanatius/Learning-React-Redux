import React from "react";


class HomePage extends React.Component{

    render(){
        return this.props.match.params.user;
    }
}

export default HomePage;
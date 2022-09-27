import React, { Component } from "react";
// Why do we have this i have no idea?!
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError) {
            return <h1> Ooooops. That is not good </h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
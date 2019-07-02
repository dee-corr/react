import React, { Component } from "react";

class ErrorMessage extends Component {

    render() {
        //var errorText = "An error has occurred."

        return (
            <div>
                <h3>{this.props.errorText}</h3>
            </div>
        );

    }
}

export default ErrorMessage;
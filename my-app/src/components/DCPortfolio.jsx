import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class DCPortfolio extends Component {

    render() {
        return (
            <div>
                <h2>List</h2>
                <List />
                <h2>Add a new article</h2>
                <Form />

            </div>
        );

    }
}

export default DCPortfolio;
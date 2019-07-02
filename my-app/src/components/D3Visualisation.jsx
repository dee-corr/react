import React, { Component } from "react";
import rd3 from "react-d3-library";
import node from "../d3/visionEthnicity"
const RD3Component = rd3.Component;

class D3Visualisation extends Component {

    constructor(props) {
        super(props);
        this.state = {d3: ''}
    }
    
    componentDidMount() {
        this.setState({d3: node});
    }

    render() {
        return (
            <div>
                <h2>D3 Visualisation - Data Management and Visualisation Project</h2>
                <RD3Component data={this.state.d3} />
            </div>
        );

    }
}

export default D3Visualisation;
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import ErrorMessage from "./ErrorMessage";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

function HasError({state}){
    if (state.error) {
        return <ErrorMessage errorText={this.state.error}/>
    }
    return ""
  }


class ConnectedForm extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" , error: this.state.error});
  }

  render() {
    const { title } = this.state;
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={this.handleChange}
            />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
            SAVE
            </button>
        </form>
        <HasError state={this.state}/>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
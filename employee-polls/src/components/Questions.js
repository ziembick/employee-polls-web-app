import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { Redirect } from "react-router-dom";

class Questions extends Component {
  state = {
    selectedOption: "optionOne",
    toHome: false,
  };

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedOption } = this.state;
    const { dispatch, question, authedUser } = this.props;

    dispatch(handleSaveQuestionAnswer(authedUser, question.id, selectedOption));

    this.setState(() => ({
      selectedOption: "optionOne",
      toHome: true,
    }));
  };

  render() {
    const { question, author, answered, answer } = this.props;

    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2>Would you rather</h2>
        <p>{author} asks:</p>
        <form onSubmit={this.handleSubmit}>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="optionOne"
                checked={this.state.selectedOption === "optionOne"}
                onChange={this.handleOptionChange}
                disabled={answered}
              />
              {question.optionOne.text}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="optionTwo"
                checked={this.state.selectedOption === "optionTwo"}
                onChange={this.handleOptionChange}
                disabled={answered}
              />
              {question.optionTwo.text}
            </label>
          </div>
          <button type="submit" disabled={answered || answer === null}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = question ? users[question.author].name : null;
  const answer = users[authedUser].answers[id];
  const answered = answer ? true : false;

  return {
    authedUser,
    question: question ? question : null,
    author,
    answer,
    answered,
  };
}

export default connect(mapStateToProps)(Questions);
import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

function QuestionPage(props) {
  const { question, author, authedUser } = props;
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      handleSaveQuestionAnswer(authedUser, question.id, selectedOption)
    );
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h3>{author.name} asks:</h3>
      <img
        src={author.avatarURL}
        alt={`Avatar of ${author.name}`}
        className="avatar"
      />
      <h2>Would you rather...</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="optionOne"
              onChange={handleOptionChange}
            />
            {question.optionOne.text}
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="optionTwo"
              onChange={handleOptionChange}
            />
            {question.optionTwo.text}
          </label>
        </div>
        <button type="submit" disabled={selectedOption === ""}>
          Submit
        </button>
      </form>
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];

  return {
    authedUser,
    question,
    author: question ? users[question.author] : null,
  };
}

export default connect(mapStateToProps)(QuestionPage);
import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { questions } from "../utils/_DATA";
import { getUnansweredQuestions, getAnsweredQuestions } from "../utils/helpers";

function HomePage({ authedUser}) {
  const [showUnanswered, setShowUnanswered] = useState(true);

  const handleToggle = () => {
    setShowUnanswered(!showUnanswered);
  };

  const filteredQuestions = showUnanswered
    ? getUnansweredQuestions(questions, authedUser)
    : getAnsweredQuestions(questions, authedUser);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Poll
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leaderboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <h2>Welcome, {authedUser.name}</h2>
      <div>
        <button onClick={handleToggle}>
          {showUnanswered ? "View Answered" : "View Unanswered"}
        </button>
      </div>
      <ul>
        {filteredQuestions.map((question) => (
          <li key={question.id}>
            <div>{question.author} asks:</div>
            <div>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</div>
            <div>Category: {showUnanswered ? "Unanswered" : "Answered"}</div>
            <NavLink to={`/questions/${question.id}`}>View Details</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    questions: Object.values(questions),
  };
}

export default connect(mapStateToProps)(HomePage);
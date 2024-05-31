import React from "react";

function Test({ questions: { questions, title, color, icon } }) {
  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">Question 6 of 10</p>
        <h2 className="test-title">
          Which of these color contrast ratios defines the minimum WCAG 2.1
          Level AA requirement for normal text?
        </h2>

        <div className="test-proccess-container">
          <div className="test-proccess"></div>
        </div>
      </div>
      <div className="test-questions"></div>
    </div>
  );
}

export default Test;

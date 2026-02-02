import React, { useState } from "react";

const SurveyForm = () => {
  // Single state object
  const [survey, setSurvey] = useState({
    fullName: "",
    rating: "5",
    isSubscribed: false
  });

  // Common change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSurvey({
      ...survey,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <h2>🍽 Restaurant Survey</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={survey.fullName}
          onChange={handleChange}
        />

        {/* Rating */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="rating"
              value="1"
              checked={survey.rating === "1"}
              onChange={handleChange}
            />
            Bad
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="3"
              checked={survey.rating === "3"}
              onChange={handleChange}
            />
            Okay
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="5"
              checked={survey.rating === "5"}
              onChange={handleChange}
            />
            Great
          </label>
        </div>

        {/* Checkbox */}
        <label className="checkbox">
          <input
            type="checkbox"
            name="isSubscribed"
            checked={survey.isSubscribed}
            onChange={handleChange}
          />
          Subscribe to Newsletter
        </label>

        <button type="submit">Submit Survey</button>
      </form>

      {/* JSON Output */}
      <pre>{JSON.stringify(survey, null, 2)}</pre>
    </div>
  );
};

export default SurveyForm;

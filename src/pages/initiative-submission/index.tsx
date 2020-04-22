import React from "react";
import "./style.css";

export const InitiativeSubmission = () => (
  <div className="initiative-submission-container">
    <div>
      <h1>Submit an Initiative </h1>
      <iframe
        title="idea submission form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfYxXLGt48pdNCe-5iy6kcpletySdCNO8Fm-HKrwiLUiomNHA/viewform?embedded=true"
        width="1000"
        height="1050"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  </div>
);

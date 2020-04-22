import React from "react";
import "./style.css";

export const Ideas = () => (
  <div className="ideas-container">
    <div>
      <h1>Submit an Idea</h1>
      <iframe
        title="idea submission form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe8nAIEgONAMBB8JLDVVxBjtSoNc_P0u-aIXLt81X66O-1qkw/viewform?embedded=true"
        width="640"
        height="650"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  </div>
);

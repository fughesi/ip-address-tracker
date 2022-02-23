import React from "react";
import "./Arrow.css";
import "../../components/Search/Search.css"

export default function Arrow() {
  return (
    <div className="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
      </svg>
    </div>
  );
}

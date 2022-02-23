import React from "react";
import Arrow from "../../images/Arrow/Arrow";
import "./Search.css";

export default function Search() {
  function BTNclick(e) {
    e.preventDefault();
    console.log("button clicked");
  }

  return (
    <main id="searchMain">
      <form>
        <input type="text" placeholder="127.0.0.1" />
        <button className="runButton" onClick={BTNclick}>
          <Arrow />
        </button>
      </form>
    </main>
  );
}

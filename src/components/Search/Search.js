import React from "react";
import Arrow from "../../images/Arrow/Arrow";
import "./Search.css";

export default function Search() {
  return (
    <main id="searchMain">
      <form>
        <input type="text" placeholder="127.0.0.1" />
        <button className="runButton">
          <Arrow />
        </button>
      </form>
    </main>
  );
}

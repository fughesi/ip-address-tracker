import React from "react";
import Search from "../Search/Search"
import "./TopFrame.css";

export default function TopFrame() {
  return (
    <main id="topFrameMain">
      <h1>IP Address Tracker</h1>
      <Search />
    </main>
  );
}

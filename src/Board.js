import React from "react";
import List from "./List";

export default function Board() {
    // day names for cards
    let baseDate = new Date();
    let days = [];
    for (let i = 0; i < 7; i++) {
        days.push(baseDate.toLocaleDateString('en-GB', { weekday: 'long' }));
        baseDate.setDate(baseDate.getDate() + 1)
    }

    return (
      <div className="Board">
        <List dayName={days[0]} />
        <List dayName={days[1]} />
        <List dayName={days[2]} />
        <List dayName={days[3]} />
        <List dayName={days[4]} />
        <List dayName={days[5]} />
        <List dayName={days[6]} />
      </div>
    );
  }
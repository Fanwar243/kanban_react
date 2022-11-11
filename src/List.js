import React, { useState } from "react";
import Card from "./Card";

export default function List(props) {
  const [cardList, setCardList] = useState([]);

  const addCard = event => {
    setCardList(cardList.concat(<Card text="test" />))
  }

  return (
    <div className="List" id={props.dayName} >
      <h1 className="dayName">{props.dayName}</h1>
      <button onClick={addCard} className="AddButton">+</button>
      {cardList}
    </div>
  );
}
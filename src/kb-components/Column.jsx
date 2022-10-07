import AddCardBtn from "./AddCardBtn";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Column(props) {

  
  const [column, setColumn] = useState();
  const params = useParams();

   

  return (
    <div
      key={props.columnId}
      className="flex flex-col gap-2.5 mt-5 w-[250px] bg-light-grey h-full rounded-lg"
    >
      <h3 className="text-red-pink-dark mb-4 mt-4 ml-4 font-bold">
        {props.columnTitle}
      </h3>
      <hr className="rounded-md mx-5 border-2 border-red-pink"></hr>
      <div className="flex justify-center mt-5 flex-col gap-3 items-center ">
        {props.cards.map((card) => (
          <Card
            key={card.cardId}
            cardId={card.cardId}
            cardTitle={card.cardTitle}
            cardDescription={card.cardText}
          />
        ))}
        <AddCardBtn name={"Card"} btnName={"+ Add card"} boardId = {props.boardId} columnId={params.id}/>
      </div>
    </div>
  );
}

export default Column;

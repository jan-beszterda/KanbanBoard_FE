import AddCardBtn from "./AddCardBtn";
import Card from "./Card";
import { loadColumn } from "../helper_functions/loadColumn";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Column(props) {

  const userId = localStorage.getItem("active_user_id");
  const [column, setColumn] = useState();
  const params = useParams();

  useEffect(() => {
    const load = async () => {
      let column = await loadColumn(params.id);
      setColumn(column);
    };
    load();
  }, [params.id]);


  const handleSubmit=(e)=> {

  const createCard = async (data = {}) => {
    let response = await fetch("/api/card/create?creator_id=" + userId + "?column_id=" + params.id,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Card created successfully");
    }

    //let result = await response.json();
    //console.log(result);

    //return result;
  };

  createCard().then(() => {
    console.log("Success Creating Card");
    window.location.reload();
  });
} 

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
        <AddCardBtn name={"Card"} btnName={"+ Add card"} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default Column;

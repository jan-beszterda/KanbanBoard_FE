import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import AddCardBtn from "./AddCardBtn";
import Card from "./Card";
import Button from "../form_components/Button";
import ConfirmationModal from "./ConfirmationModal";
import { removeColumn } from "../helper_functions/removeColumn";

function Column(props) {
  const [showModal, setShowModal] = useState(false);

  const remove = async (boardId, columnId) => {
    let response = await removeColumn(boardId, columnId);
    if (response.status === 200) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div
        key={props.columnId}
        className="flex flex-col gap-2.5 mt-5 w-[250px] bg-light-grey h-full rounded-lg"
      >
        <div className="flex flex-row justify-between">
          <h3 className="text-red-pink-dark mb-4 mt-4 ml-4 font-bold">
            {props.columnTitle}
          </h3>
          <Button
            className={"mb-4 mt-4 mr-4"}
            type={"button"}
            onClick={() => setShowModal(true)}
          >
            <FaTrashAlt />
          </Button>
          {showModal ? (
            <ConfirmationModal
              closeModal={() => setShowModal(false)}
              confirm={() => remove(props.boardId, props.columnId)}
            />
          ) : null}
        </div>
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
          <AddCardBtn name={"Card"} btnName={"+ Add card"} />
        </div>
      </div>
    </>
  );
}

export default Column;

import { useState } from "react";
import { TiDelete } from "react-icons/ti";

import AddCardBtn from "./AddCardBtn";
import CardItem from "./CardItem";

import Button from "../form_components/Button";
import ConfirmationModal from "./ConfirmationModal";
import ConfirmationModalEdit from "./ConfirmationModalEdit";
import { removeColumn } from "../helper_functions/removeColumn";
import Card from "../card_components/Card";
import { removeCard } from "../helper_functions/removeCard";
import { editColumnTitle } from "../helper_functions/editColumns";
import { FaPencilAlt } from "react-icons/fa";

function Column(props) {
  const [showModal, setShowModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [currentCard, setCurrentCard] = useState();
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [editModal, setEditModal] = useState(false);
  props.cards.sort((a, b) => (a.cardId > b.cardId ? 1 : -1));

  const remove = async (boardId, columnId) => {
    let response = await removeColumn(boardId, columnId);
    if (response.status === 200) {
      props.stompClient.publish({
        destination: "/app/board/" + props.boardId,
      });
      setShowModal(false);
    }
  };


  const closeModal = () => {
    setEditModal(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewColumnTitle(e.target.value);
  };

  const edit = () => {
    editColumnTitle(props.columnId, newColumnTitle).then(() => {
      props.stompClient.publish({
        destination: "/app/board/" + props.boardId,
      });
      setNewColumnTitle("")
      closeModal();
    });
  };

  const deleteCard = async (cardId) => {
    let response = await removeCard(cardId);
    if (response.status === 200) {
      props.stompClient.publish({
        destination: "/app/board/" + props.boardId,
      });
      setShowCard(false);
    }
  };

  async function moveCard(callback, cardId, columnId1, columnId2) {
    let response = await callback(cardId, columnId1, columnId2);
    if (response.status === 200) {
      props.stompClient.publish({
        destination: "/app/board/" + props.boardId,
      });
      console.log("on move, should publish");
    }
  }

  const changeCard = async (callback, cardId, card) => {
    let response = await callback(cardId, card);
    if (response.status === 200) {
      props.stompClient.publish({
        destination: "/app/board/" + props.boardId,
      });
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
          <div className={"flex"}>
          <Button
            className={"mb-4 mt-4 mr-4"}
            type={"button"}
            onClick={() => setEditModal(true)}
          >
            <FaPencilAlt color={"FF8E7F"} size={"15px"} />
          </Button>
          {editModal ? (
            <ConfirmationModalEdit
              closeModal={() => setEditModal(false)}
              edit={edit}
              value = {newColumnTitle}
              onChange = {(e) => handleChange(e)}
              btnType = {"confirm"}
            />
          ) : null}

          <Button
            className={"mb-4 mt-4 mr-4"}
            type={"button"}
            onClick={() => setShowModal(true)}
          >
            <TiDelete color={"FF8E7F"} size={"25px"} />
          </Button>
          {showModal ? (
            <ConfirmationModal
              closeModal={() => setShowModal(false)}
              confirm={() => remove(props.boardId, props.columnId)}
            />
          ) : null}
          </div>
        </div>
        <hr className="rounded-md mx-5 border-2 border-red-pink"></hr>
        <div className="flex justify-center mt-5 flex-col gap-3 items-center ">
          {props.cards.map((card) => (
            <CardItem
              key={card.cardId}
              cardId={card.cardId}
              cardTitle={card.cardTitle}
              onClick={() => {
                setCurrentCard(card.cardId);
                setShowCard(true);
              }}
            />
          ))}
          {showCard ? (
            <Card
              cardId={currentCard}
              board={props.boardId}
              currentColumnId={props.columnId}
              column={props.columnTitle}
              columnsList={props.columns}
              boardCLient={props.stompClient}
              onMove={moveCard}
              onClose={() => {
                setShowCard(false);
                setCurrentCard(-1);
              }}
              onDelete={() => {
                deleteCard(currentCard);
              }}
              onDetailsChange={changeCard}
            />
          ) : null}
          <AddCardBtn
            name={"Add new card"}
            btnName={"+ Add card"}
            boardId={props.boardId}
            columnId={props.columnId}
            stompClient={props.stompClient}
          />
        </div>
      </div>
    </>
  );
}

export default Column;

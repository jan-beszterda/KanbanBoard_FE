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
import { createCard } from "../helper_functions/createCard";

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

  //Load cards on column 

  const userId = localStorage.getItem("active-user-id");
  const [loadCard, setLoadCard] = useState(props.cards);
  const [addCardModel, setAddCardModel] = useState(false);

  const [newCard, setNewCard] = useState({
    cardTitle: "",
    cardText: "",
  });

  const handleCardNameChange = (e) => {
    setNewCard({ ...newCard, cardTitle: e.target.value });
  };
  
  const handleCardDescriptionChange = (e) => {
    setNewCard({ ...newCard, cardText: e.target.value });
  };

  console.log(newCard,userId,props.columnId,props.boardId);

  const addCard = () => {
    createCard(userId,props.columnId,props.boardId,newCard).then(() => {
      setLoadCard ([  ...loadCard, newCard]);
      setNewCard({  
        cardName: "",
        cardDescription: "",
      });
      setAddCardModel(false);
    });
    
  };


  return (
    <>
      <div
        key={props.columnId}
        className="flex flex-col gap-2.5 mt-5 w-[250px] bg-light-grey rounded-lg mb-20 h h-full"
      >
        <div className="flex flex-row justify-between">
          <h3 className="text-red-pink-dark mb-4 mt-4 ml-4 font-bold">
            {props.columnTitle}
          </h3>

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
        <hr className="rounded-md mx-5 border-2 border-red-pink"></hr>
        <div className="flex justify-center mt-5 flex-col gap-3 items-center ">
          {loadCard.map((card) => (
            <CardItem
              key={card.cardId}
              cardId={card.cardId}
              cardTitle={card.cardTitle}
              /*column={props.columnTitle}*/
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


        <button
        className=" w-[248px] font-sans font-normal text-sm m-auto bg-dark-grey py-2 mt-2 px-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setAddCardModel(true)}
      >
        + Add card
      </button>

      {addCardModel ? (
        <AddCardBtn
          name={"Add card"}
          closemodal={() => setAddCardModel(false)}
          addCard={addCard}
          handleCardTitle={handleCardNameChange}
          handleCardText={handleCardDescriptionChange}
        />
      ) : null}
      
         </div>
      </div>
    </>
  );
}

export default Column;

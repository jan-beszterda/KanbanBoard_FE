import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { HiCheck, HiX } from "react-icons/hi";

import { loadCard } from "../helper_functions/loadCard";
import { createStompClient } from "../helper_functions/createStompClient";
import { createComment } from "../helper_functions/createComment";
import { moveCard } from "../helper_functions/moveCard";
import { loadColumn } from "../helper_functions/loadColumn";
import { editCard } from "../helper_functions/editCard";

const Card = (props) => {
  const [card, setCard] = useState();
  const [currentColumnId, setCurrentColumnId] = useState();
  const [currentColumnTitle, setCurrentColumnTitle] = useState();
  const [futureColumnId, setFutureColumnId] = useState();
  const [cardAuthor, setCardAuthor] = useState();
  const [cardComments, setCardComments] = useState([]);
  const [client, setClient] = useState({});
  const [isToBeUpdated, setIsToBeUpdated] = useState(false);
  const [newComment, setNewComment] = useState({
    commentText: "",
  });
  const [cardChanges, setCardChanges] = useState({
    cardTitle: "",
    cardText: "",
  });
  const [isToBeEdited, setIsToBeEdited] = useState(false);

  useEffect(() => {
    const load = async () => {
      let card = await loadCard(props.cardId);
      setCardAuthor(card.author);
      setCardComments(card.comments);
      card.author = null;
      card.comments = null;
      setCard(card);

      setCardChanges({ cardTitle: card.cardTitle, cardText: card.cardText });
    };
    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      let column = await loadColumn(props.currentColumnId);
      setCurrentColumnId(column.columnId);
      setCurrentColumnTitle(column.columnTitle);
    };
    load();
  }, []);

  useEffect(() => {
    let stompClient = createStompClient("/topic/card/" + props.cardId, () => {
      setIsToBeUpdated(true);
    });
    setClient(stompClient);
    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    if (isToBeUpdated) {
      const load = async () => {
        let card = await loadCard(props.cardId);
        setCardAuthor(card.author);
        setCardComments(card.comments);
        card.author = null;
        card.comments = null;
        setCard(card);

        if (futureColumnId) {
          let column = await loadColumn(futureColumnId);
          setCurrentColumnId(column.columnId);
          setCurrentColumnTitle(column.columnTitle);
        }
      };
      load();
      setIsToBeEdited(false);
    }
  }, [isToBeUpdated]);

  const addComment = async () => {
    let response = await createComment(
      newComment,
      localStorage.getItem("active-user-id"),
      props.cardId
    );
    if (response.status === 200) {
      setNewComment({
        commentText: "",
      });
      client.publish({
        destination: "/app/card/" + props.cardId,
      });
    }
  };

  const handleCardFieldChange = (fieldName, fieldValue) => {
    setCardChanges({ ...cardChanges, [fieldName]: fieldValue });
  };

  const changeCardDetails = async (cardId, card) => {
    let response = await editCard(cardId, card);
    if (response.status === 200) {
      setCardChanges({
        cardTitle: "",
        cardText: "",
      });
      setIsToBeEdited(false);
      client.publish({
        destination: "/app/card/" + props.cardId,
      });
    }
    return response;
  };

  const handleCommentFieldChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const changeColumn = async (cardId, columnId1, columnId2) => {
    let response = await moveCard(cardId, columnId1, columnId2);
    if (response.status === 200) {
      client.publish({ destination: "/app/card/" + props.cardId });
    }
    return response;
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.onDetailsChange(changeCardDetails, props.cardId, cardChanges);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onMove(changeColumn, props.cardId, currentColumnId, futureColumnId);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 pb-0">
              {isToBeEdited ? (
                <input
                  className="p-2 border-2 border-gray-300 rounded-md"
                  type="text"
                  name="cardTitle"
                  value={cardChanges.cardTitle}
                  onChange={(e) => {
                    handleCardFieldChange(e.target.name, e.target.value);
                  }}
                />
              ) : (
                <h2 className="text-xl font-semibold">
                  {card && card.cardTitle}
                </h2>
              )}
              {isToBeEdited ? (
                <div className="flex ml-3 items-stretch justify-around">
                  <HiCheck
                    className="cursor-pointer m-2"
                    color="#FF8E7F"
                    size={"34px"}
                    type="button"
                    onClick={(e) => {
                      handleEdit(e);
                    }}
                  />
                  <HiX
                    className=" cursor-pointer m-2"
                    color="#FF8E7F"
                    size={"34px"}
                    type="button"
                    onClick={() => {
                      setIsToBeEdited(false);
                    }}
                  />
                </div>
              ) : (
                <FaPencilAlt
                  className="ml-3 mt-2 cursor-pointer"
                  color="#FF8E7F"
                  size={"17px"}
                  type="button"
                  onClick={() => setIsToBeEdited(true)}
                />
              )}
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.onClose}
              >
                X
              </button>
            </div>
            <div className="flex items-start justify-between border-b border-solid border-slate-200 p-5 pt-0 pb-3">
              {cardAuthor && (
                <p className="text-xs font-light tracking-wide italic">
                  Created by: {cardAuthor.firstName} {cardAuthor.lastName} (
                  {cardAuthor.email})
                </p>
              )}
            </div>
            <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200">
              {isToBeEdited ? (
                <textarea
                  className="basis-4/5 m-2 p-2 h-40 border-2 border-gray-300 rounded-md"
                  type="text"
                  name="cardText"
                  value={cardChanges.cardText}
                  onChange={(e) => {
                    handleCardFieldChange(e.target.name, e.target.value);
                  }}
                />
              ) : (
                <p className="text-l font-normal basis-4/5 p-5">
                  {card && card.cardText}
                </p>
              )}
              <div className="flex flex-col items-center basis-1/5 border-l p-3">
                <div className="flex items-start mb-2 border-b">
                  <span>Status:&nbsp;</span>
                  <span className="text-l font-semibold">
                    {currentColumnTitle && currentColumnTitle}
                  </span>
                </div>
                <div className="flex flex-col items-center mb-2 border-b">
                  <h3 className="text-l font-semibold mb-2">Move card:</h3>
                  <select
                    className="mb-2 p-2 rounded"
                    name="column"
                    id="column"
                    onChange={(e) => {
                      setFutureColumnId(e.target.value);
                    }}
                  >
                    {props.columnsList.map((column) =>
                      column.columnId === currentColumnId ? (
                        <option
                          key={column.columnId}
                          value={column.columnId}
                          disabled={true}
                          selected={true}
                        >
                          {column.columnTitle}
                        </option>
                      ) : (
                        <option
                          key={column.columnId}
                          value={column.columnId}
                          disabled={false}
                        >
                          {column.columnTitle}
                        </option>
                      )
                    )}
                  </select>
                  <button
                    className="font-sans font-normal text-sm m-auto bg-dark-grey py-2 px-2 mb-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Move
                  </button>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <button
                    className="font-sans font-normal text-sm m-auto bg-dark-grey py-2 px-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onDelete}
                  >
                    Delete card
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between p-5 pb-1">
              <h3 className="text-l font-semibold">Comments</h3>
            </div>
            <div className="flex items-start justify-between p-5 pt-1 pb-1">
              <textarea
                className="basis-4/5 h-40 border-2 border-gray-300 rounded-md p-2"
                type="text"
                name="commentText"
                placeholder="Enter comment"
                value={newComment.commentText}
                onChange={(e) => handleCommentFieldChange(e)}
              />
              <button
                className="basis-1/5 font-sans font-normal text-sm mx-2 bg-dark-grey py-2 mb-2 px-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={addComment}
                type="button"
              >
                Add comment
              </button>
            </div>
            <div className="flex flex-col items-start justify-between p-5 pt-1">
              {cardComments && cardComments.length !== 0 ? (
                cardComments
                  .sort((a, b) => {
                    return a.publishedOn > b.publishedOn
                      ? -1
                      : a.publishedOn === b.publishedOn
                      ? 0
                      : 1;
                  })
                  .map((comment) => (
                    <div
                      key={comment.commentId}
                      className="border-b border-solid border-slate-200 p-2"
                    >
                      <p className="text-xs font-light tracking-wide italic my-1">
                        On {comment.publishedOn} {comment.user.firstName}{" "}
                        {comment.user.lastName} ({comment.user.email}) wrote:
                      </p>
                      <p className="text-sm font-normal my-1">
                        {comment.commentText}
                      </p>
                    </div>
                  ))
              ) : (
                <p className="text-sm font-normal">No comments yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Card;

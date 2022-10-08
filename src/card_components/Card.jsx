import { useState, useEffect } from "react";
import { loadCard } from "../helper_functions/loadCard";
import { createStompClient } from "../helper_functions/createStompClient";
import { createComment } from "../helper_functions/createComment";

const Card = (props) => {
  const [card, setCard] = useState();
  const [cardAuthor, setCardAuthor] = useState();
  const [cardComments, setCardComments] = useState([]);
  const [client, setClient] = useState({});
  const [isToBeUpdated, setIsToBeUpdated] = useState(false);
  const [newComment, setNewComment] = useState({
    commentText: "",
  });

  useEffect(() => {
    const load = async () => {
      let card = await loadCard(props.cardId);
      setCardAuthor(card.author);
      setCardComments(card.comments);
      card.author = null;
      card.comments = null;
      setCard(card);
    };
    load();
  }, [props.cardId]);

  useEffect(() => {
    let stompClient = createStompClient("/topic/card/" + props.cardId, () =>
      setIsToBeUpdated(true)
    );
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
        setCard(JSON.parse(card));
      };
      load();
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

  const handleCommentFieldChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 pb-0">
              <h2 className="text-xl font-semibold">
                {card && card.cardTitle}
              </h2>
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
            <div className="flex items-start justify-between border-b border-solid border-slate-200">
              <p className="text-l font-normal basis-4/5 p-5">
                {card && card.cardText}
              </p>
              <div className="flex flex-col basis-1/5 border-l p-5">
                <button
                  className="font-sans font-normal text-sm m-auto bg-dark-grey py-2 mb-2 px-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={props.onDelete}
                >
                  Delete card
                </button>
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

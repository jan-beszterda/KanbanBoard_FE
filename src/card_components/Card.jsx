import { useState, useEffect } from "react";
import { loadCard } from "../helper_functions/loadCard";

const Card = (props) => {
  const [card, setCard] = useState();
  const [newComment, setNewComment] = useState({
    commentText: "",
  });

  useEffect(() => {
    const load = async () => {
      let card = await loadCard(props.cardId);
      setCard(card);
    };
    load();
  }, [props.cardId]);

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
              {card && (
                <p className="text-xs font-light tracking-wide italic">
                  Created by: {card.author.firstName} {card.author.lastName} (
                  {card.author.email})
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
                {/* Other buttons here */}
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
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                className="basis-1/5 font-sans font-normal text-sm mx-2 bg-dark-grey py-2 mb-2 px-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={() => {}}
                type="button"
              >
                Add comment
              </button>
            </div>
            <div className="flex flex-col items-start justify-between p-5 pt-1">
              {card && card.comments.length !== 0 ? (
                card.comments.map((comment) => (
                  <div
                    key={comment.commentId}
                    className="border-b border-solid border-slate-200"
                  >
                    <p className="text-xs font-light tracking-wide italic">
                      On {comment.publishedOn} {comment.user} wrote:
                    </p>
                    <p className="text-sm font-normal">{comment.commentText}</p>
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

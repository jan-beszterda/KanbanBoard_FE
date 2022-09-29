import React from "react";

const buttonClass =
  "border w-full my-5 py-4 rounded-md bg-red-pink hover:bg-red-pink-dark/70 text-white";

export default function FormButton({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <button type={action} className={buttonClass} onSubmit={handleSubmit}>
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

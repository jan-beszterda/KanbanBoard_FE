import React from "react";
import { Link } from "react-router-dom";

function TeamItem(props) {
  return (
    <Link
      className="mb-2 border-b-2 rounded p-2 border-red-pink hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
      key={props.teamId}
      id={props.teamId}
      to={`/teampage/${props.teamId}`}
    >
      {props.teamName}
    </Link>
  );
}

export default TeamItem;

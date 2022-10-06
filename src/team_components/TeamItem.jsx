import React from "react";
import { Link } from "react-router-dom";

function TeamItem(props) {
  return (
    <div>
      <Link
        key={props.teamId}
        id={props.teamId}
        to={`/teampage/${props.teamId}`}
      >
        {props.teamName}
      </Link>
    </div>
  );
}

export default TeamItem;

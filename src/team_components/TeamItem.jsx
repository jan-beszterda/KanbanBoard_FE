import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function TeamItem(props) {
  const [color, setColor] = React.useState("");


  let colorArray = [{color: "border-red-500"}, {color: "border-yellow-500"}, {color: "border-green-500"}, {color: "border-blue-500"}, {color: "border-indigo-500"}, {color: "border-purple-500"}, {color: "border-pink-500"}];
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)].color;

  let fincalColor = color ? color : randomColor;

  useEffect(() => {
    setColor(fincalColor);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("teamColor", color);
  }, [color]);
  
  
  return (
    <Link
      className= {`text-center  font-bold text-xs uppercase mx-5 mb-2 border-b-2 rounded-b p-2 ${color} hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150`}
      key={props.teamId}
      id={props.teamId}
      to={`/teampage/${props.teamId}`}
    >
      {props.teamName}
    </Link>
  );
}

export default TeamItem;

import React from "react";
import {Draggable} from 'react-beautiful-dnd';

function Card({cardID,cardTitle,cardDescription,index}) {
  return (
    <Draggable draggableId={cardID} index={index}>
      {(provided) => (
        
    <div key={cardID}  ref={provided.innerRef} typeof="card"
    {...provided.draggableProps}
    {...provided.dragHandleProps}>
      
      <div className=" flex flex-col bg-white w-[220px] rounded-xl px-4 py-2">
        <div className="flex flex-row justify-around gap-10">
          <h1 className="my-2 font-bold mb-3">{cardTitle}</h1>
          <p className="pt-1 pl-12">•••</p>
        </div>
        <hr className="border-1 border-light-grey pt-2"></hr>

        <p className="mb-2">{cardDescription} </p>
        <hr className="border-1 border-light-grey"></hr>

        <p className=" text-end text-sm italic pt-2">User name</p>
      </div>
    </div>
      )}
    </Draggable>
  );

  

 
}

export default Card;

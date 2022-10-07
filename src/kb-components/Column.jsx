import AddCardBtn from "./AddCardBtn";
import Card from "./Card";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';


function Column({cards, columnTitle, columnId,type}) {
  return (
    <div
      key={columnId}
      className="flex flex-col gap-2.5 mt-5 w-[250px] bg-light-grey h-full rounded-lg"
    >
      <h3 className="text-red-pink-dark mb-4 mt-4 ml-4 font-bold">
        {columnTitle}
      </h3>
     
      <hr className="rounded-md mx-5 border-2 border-red-pink"></hr>

      <Droppable droppableId="Hello">
        {(provided) => (

      <div className="flex justify-center mt-5 flex-col gap-3 items-center "  {...provided.droppableProps} ref={provided.innerRef} type = {type} >
        {cards.map((card,index) => (
            <Card
            index = {index}
            key={card.id}
            cardID={card.id}
            cardTitle={card.cardTitle}
            cardDescription={card.cardText}
          />
        ))} 
        {provided.placeholder}
        <AddCardBtn name={"Card"} btnName={"+ Add card"} />
      </div>

        )}
      </Droppable>
      
    </div>
  );
}

export default Column;

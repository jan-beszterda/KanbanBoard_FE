function CardItem(props) {
  return (
    <button
      key={props.cardId}
      className="flex flex-col bg-white w-[220px] rounded-xl p-4 my-3 hover:shadow-lg drop-shadow-md"
      type="button"
      onClick={props.onClick}
    >
      <p className="text-l font-semibold self-center">{props.cardTitle}</p>
    </button>
  );
}

export default CardItem;

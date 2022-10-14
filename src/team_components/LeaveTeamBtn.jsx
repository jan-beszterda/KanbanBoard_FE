const leaveTeamButton = ({ handleSubmit }) => {
  return (
    <button
      className="font-sans font-bold capitalize text-m ml-10  px-2 py-2 shadow-md rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
      type="button"
      onClick={handleSubmit}
    >
      Leave team
    </button>
  );
};

export default leaveTeamButton;

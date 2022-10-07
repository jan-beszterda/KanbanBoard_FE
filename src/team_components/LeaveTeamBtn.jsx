const leaveTeamButton = ({ handleSubmit }) => {
  return (
    <button
      className="font-sans font-bold uppercase text-m rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
      type="button"
      onClick={handleSubmit}
    >
      Leave team
    </button>
  );
};

export default leaveTeamButton;

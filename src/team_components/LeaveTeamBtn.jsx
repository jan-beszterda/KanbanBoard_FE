const leaveTeamButton = ({ handleSubmit }) => {
  return (
    <button
      className="font-sans font-bold uppercase text-m mx-auto p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none my-2 ease-linear transition-all duration-150"
      type="button"
      onClick={handleSubmit}
    >
      Leave team
    </button>
  );
};

export default leaveTeamButton;

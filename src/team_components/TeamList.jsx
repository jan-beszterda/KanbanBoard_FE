import { useNavigate } from "react-router-dom";

import Button from "../utility_components/Button";
import CreateBtn from "../utility_components/CreateBtn";

function TeamList(props) {
  const navigate = useNavigate();
  console.log(props.teams);

  const onClick = (team) => {
    navigate(`/team/${team.teamId}`, { state: { team: team } });
  };

  return (
    <div>
      <div className="flex justify-around">
        <h6 className="mx-4 font-medium">My Teams</h6>
        {props.teams.map(
          (team) => (
            console.log(team.teamId),
            (
              <Button
                className={""}
                type={"button"}
                onClick={(team) => {
                  navigate("/team/" + team.teamId);
                }}
                id={team.teamId}
              >
                {team.teamName}
              </Button>
            )
          )
        )}
        <CreateBtn btnName={"+"} name={"Team name"} />
      </div>
    </div>
  );
}

export default TeamList;

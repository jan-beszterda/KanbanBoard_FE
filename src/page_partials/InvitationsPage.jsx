import { useState, useEffect } from "react";

import { loadInvitations } from "../helper_functions/loadInvitations";
import AcceptInvitationBtn from "../team_components/AcceptInvitationBtn";
import DenyInvitationBtn from "../team_components/DenyInvitationBtn";

const InvitationsPage = () => {
  const [invitations, setInvitations] = useState();
  const [update, setUpdate] = useState(false);
  const userId = localStorage.getItem("active-user-id");

  useEffect(() => {
    const load = async () => {
      let invitations = await loadInvitations(userId);
      setInvitations(invitations);
    };
    load();
  }, []);

  useEffect(() => {
    if (update) {
      const load = async () => {
        let invitations = await loadInvitations(userId);
        setInvitations(invitations);
      };
      load();
      setUpdate(false);
    }
  }, [update]);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold border-b border-b-2 p-2">
          Invitations
        </h3>
        {invitations &&
          (invitations.length !== 0 ? (
            invitations.map((team) => (
              <div key={team.id} className="mb-2 p-2 border-b">
                <div className="flex p-2 bg-gradient-to-l from-slate-200">
                  <div className="basis-4/5">
                    <h4 className="text-l font-semibold">
                      Team: {team.teamName}
                    </h4>
                    <p className="">{team.teamDescription}</p>
                  </div>
                  <div className="flex basis-1/5 items-center justify-evenly">
                    <AcceptInvitationBtn
                      teamId={team.id}
                      userId={userId}
                      callback={() => {
                        setUpdate(true);
                      }}
                    />
                    <DenyInvitationBtn
                      teamId={team.id}
                      userId={userId}
                      callback={() => {
                        setUpdate(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="mb-2 p-2">No invitations</p>
          ))}
      </div>
    </div>
  );
};

export default InvitationsPage;

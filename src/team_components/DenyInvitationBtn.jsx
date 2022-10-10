import React from 'react';

function DenyInvitationBtn({teamId, userId}) {

    const handleSubmit=(e)=> {

            const denyInvitation = async (data = {}) => {
                let response = await fetch('/api/user/' + userId + "/deny_team_invite?team_id=" + teamId, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    console.log('Endpoint works!');
                    console.log(response)
                }
                return response;
            }

        denyInvitation().then((result) => {
            console.log(result);
            window.location.reload();
        });

    }
    // End handleSubmit.

    return (
        <button
            className="font-sans font-bold uppercase text-m rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={handleSubmit}
        >
            Deny
        </button>
    );

}

export default DenyInvitationBtn
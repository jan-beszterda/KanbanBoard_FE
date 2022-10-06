import { useNavigate } from "react-router-dom";

const leaveTeamButton = ({teamId}) => {

  
    const userId = localStorage.getItem('active-user-id');
    const navigate = useNavigate();
    const toLayout = () => navigate("/profilepage", { replace: true });

    const handleSubmit=(e)=> {           

            const leaveTeam = async (data = {}) => {
                let response = await fetch('/api/team/'+ teamId + '/leave?user_id=' + userId, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                console.log(response);
                
                if (response.status === 200) {
                    console.log('Left team successfully');
                }

                let result = await response.json();
                console.log(result);

                return result;
            }

        leaveTeam().then((result) => {
           toLayout();             
        });

    }
    // End handleSubmit.
    return (
      <button className=" font-sans font-bold uppercase text-m ml-10  px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
      type="button" onClick={handleSubmit}>
        Leave team
      </button>
    );
  };
  
  export default leaveTeamButton;
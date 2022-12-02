import { useState } from "react"

const UserDashboard = ({data}) => {
  const [userData, setUserData] = useState(null);

  return (
    <div className="container-md">
      <h1>Welcome to your dashboard!</h1>
      <section>
        <h2>Your teams</h2>
        <hr />
        <div className="container-md">
          {/* Check user data and map out teams in rows with key, title and description */}
          <p>You don't have any teams.</p>
        </div>
      </section>
      <section>
        <h2>Your boards</h2>
        <hr />
        <div className="container-md">
          {/* Check user data and map out boards in rows with key, title and description */}
          <p>You don't have any boards.</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <div className="w-[1000px] h-[450px] bg-gray-200 rounded ">

        <div >

        <h1>Welcome to Dashboard</h1>
        <p>Let’s create teams for your projects!</p>
        </div>

        <div>

          <div>
          <Avatar color={Avatar.getRandomColor('sitebase', ['black', 'grey', 'orange'])} name="John Doe" size="40" round={true} />
          <p>User Name</p>
          <p>edit</p>
          </div>

          <div>
            <p>About me</p>
            <textarea placeholder="Write something about yourself"></textarea>
          </div>

        </div>

        <div>
          <p>Email</p>
          <input type="text" placeholder=""  value={"UserEmail@gmal.com"}/>
        </div>

        

        
      </div>
    </div>
  );
}

export default ProfilePage;

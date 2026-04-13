import React, { use } from "react";

const Friends = ({ friends }) => {
  const allFriends = use(friends);
  console.log(allFriends);
  return <div>
    <h2>{allFriends.length}</h2>
  </div>;
};

export default Friends;

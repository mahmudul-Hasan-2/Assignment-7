import React, { use } from "react";
import FriendsCard from "../../Components/FriendsCard/FriendsCard";

const Friends = ({ friends }) => {
  const allFriends = use(friends);
  console.log(allFriends);
  return (
    <div className="space-y-4 px-2">
      <h2 className="text-2xl font-bold text-[#1F2937]">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allFriends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;

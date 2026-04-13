import React from "react";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();
  const friends = useLoaderData();
  const friend = friends.find((friend) => friend.id == friendId);
  return (
    <div>
      <h2>{friend.name}</h2>
    </div>
  );
};

export default FriendDetails;

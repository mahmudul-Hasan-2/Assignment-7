import React from "react";

const FriendsCard = ({ friend }) => {
  return (
    <div className="space-y-3 flex justify-center items-center flex-col text-center p-6 shadow-lg rounded-2">
      <div>
        <img className="rounded-full" src={friend.picture} alt="" />
      </div>
      <div className="space-y-2">
        <div>
          <h2 className="text-[20px] font-semibold text-[#1F2937]">
            {friend.name}
          </h2>
        </div>
        <div>
          <span className="text-xs text-[#64748B]">
            {friend.days_since_contact}d ago
          </span>
        </div>
        <div className="flex items-center gap-2">
          {friend.tags.map((tag) => (
            <span className="badge badge-success uppercase text-[#244D3F]">
              {tag}
            </span>
          ))}
        </div>
        <div>
          <span
            className={`badge capitalize text-white ${friend.status === "almost due" && "bg-yellow-600"} ${friend.status === "on-track" && "bg-green-900"} ${friend.status === 'overdue' && "bg-red-600"}`}
          >
            {friend.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;

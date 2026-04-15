import React, { useContext } from "react";
import { BiMessageDots, BiTrash, BiVideo } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { PiArchiveDuotone } from "react-icons/pi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { HandlingContext } from "../../Context/Context";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const friends = useLoaderData();
  const { setTimeLine, timeLine } = useContext(HandlingContext);
  const { friendId } = useParams();
  const interaction = (friend, type) => {
    const dataFormat = {
      type: type,
      name: friend.name,
      date: friend.next_due_date,
    };
    toast.success(`${dataFormat.type} with ${dataFormat.name}`);
    setTimeLine([...timeLine, dataFormat]);
  };
  const friend = friends.find((friend) => friend.id == friendId);
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 container mx-auto my-20 px-2">
      {/* Left part */}
      <div className="w-full lg:w-[30%] bg-white/80 space-y-4">
        <div className="space-y-3 flex justify-center text-black items-center flex-col text-center p-6 shadow-lg rounded-lg">
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
              <span
                className={`badge capitalize text-white ${friend.status === "almost due" && "bg-yellow-600"} ${friend.status === "on-track" && "bg-green-900"} ${friend.status === "overdue" && "bg-red-600"}`}
              >
                {friend.status}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {friend.tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="badge bg-[#CBFADB] uppercase text-[#244D3F]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <p className="text-gray-600 text-[14px] sm:text-base">
                "{friend.bio}"
              </p>
            </div>
            <div>
              <p>{friend.email}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </button>
          <button className="btn">
            <PiArchiveDuotone /> Archive
          </button>
          <button className="btn text-red-600">
            <BiTrash></BiTrash> Delete
          </button>
        </div>
      </div>
      {/* right part */}
      <div className="w-full lg:w-[70%] space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="px-4 py-8 text-center shadow-lg rounded-lg">
            <h2 className="text-[30px] font-semibold">
              {friend.days_since_contact}
            </h2>
            <span className="text-gray-500">days since contact</span>
          </div>
          <div className="px-4 py-8 text-center shadow-lg rounded-lg">
            <h2 className="text-[30px] font-semibold">{friend.goal}</h2>
            <span className="text-gray-500">Goal (Days)</span>
          </div>
          <div className="px-4 py-8 text-center shadow-lg rounded-lg">
            <h2 className="text-[30px] font-semibold">
              {friend.next_due_date}
            </h2>
            <span className="text-gray-500">Next Due</span>
          </div>
        </div>
        <div className="p-6 shadow-lg space-y-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-[#244D3F]">
              Relationship Goal
            </span>
            <button className="btn">Edit</button>
          </div>
          <div>
            <h1 className="text-gray-700 text-[18px]">
              Connect every{" "}
              <span className="font-bold">{friend.goal} Days</span>
            </h1>
          </div>
        </div>
        <div className="w-full p-6 space-y-4 shadow-lg rounded-lg">
          <h2 className="text-[20px] text-[#244D3F]">Quick Check-In</h2>
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
            <button
              onClick={() => interaction(friend, "call")}
              className="btn h-25 flex-col w-full lg:w-[32.2%] bg-[#F8FAFC] "
            >
              <FiPhoneCall size={40} />
              <span>Call</span>
            </button>
            <button
              onClick={() => interaction(friend, "text")}
              className="btn h-25 flex-col w-full lg:w-[32.2%] bg-[#F8FAFC] "
            >
              <BiMessageDots size={40} />
              <span>Text</span>
            </button>
            <button
              onClick={() => interaction(friend, "video")}
              className="btn h-25 flex-col w-full lg:w-[32%] bg-[#F8FAFC] "
            >
              <BiVideo size={40} />
              <span>Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

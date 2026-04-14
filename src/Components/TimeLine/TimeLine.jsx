import React, { useContext, useState } from "react";
import { HandlingContext } from "../../Context/Context";
import CallCard from "../../Parts/CallCard/CallCard";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";
import TextCard from "../../Parts/TextCard/TextCard";

const TimeLine = () => {
  const { calls, texts, videos } = useContext(HandlingContext);
  console.log(calls, texts, videos);
  const [sortingType, setSortingType] = useState("");
  return (
    <div className="container mx-auto px-2 my-20">
      <h2 className="text-5xl text-[#1F2937] font-bold">Timeline</h2>
      <select defaultValue="Filter timeline" className="select my-6 shadow">
        <option disabled={true} className="text-gray-300">
          Filter timeline
        </option>
        <option>
          <a onClick={() => setSortingType("Call")}>Call</a>
        </option>
        <option>
          <a onClick={() => setSortingType("Text")}>Text</a>
        </option>
        <option>
          <a onClick={() => setSortingType("Video")}>Video</a>
        </option>
      </select>
      <div>
        {/* Calls  */}
        {calls.map((call) => (
          <CallCard key={call.id} call={call}></CallCard>
        ))}
        {/* Text */}
        {texts.map((text) => (
          <TextCard key={text.id} text={text}></TextCard>
        ))}
        {/* Videos */}
        {}
      </div>
    </div>
  );
};

export default TimeLine;

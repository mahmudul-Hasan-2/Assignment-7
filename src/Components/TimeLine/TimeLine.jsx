import React, { useContext, useState } from "react";
import { HandlingContext } from "../../Context/Context";
import callImage from "../../assets/call.png";
import textImage from "../../assets/text.png";
import videoImage from "../../assets/video.png";

const TimeLine = () => {
  const { timeLine } = useContext(HandlingContext);
  const [filteredCard, setFilteredCard] = useState(timeLine);
  const [value, setValue] = useState("");
  // useEffect(() => {
  //   setFilteredCard(timeLine);
  // }, [timeLine]);
  const handleSorting = (e) => {
    setValue(() => e.target.value);
    if (e.target.value === "call") {
      let allCallCard = timeLine.filter((t) => t.type === "call");
      setFilteredCard(allCallCard);
      return;
    } else if (e.target.value === "text") {
      let allTextCard = timeLine.filter((t) => t.type === "text");
      setFilteredCard(allTextCard);
      return;
    } else if (e.target.value === "video") {
      let allVideoCard = timeLine.filter((t) => t.type === "video");
      setFilteredCard(allVideoCard);
      return;
    } else {
      setFilteredCard(timeLine);
      return;
    }
  };
  console.log(filteredCard);
  console.log(value);
  return (
    <div className="container mx-auto px-2 my-20">
      <h2 className="text-5xl text-[#1F2937] font-bold">Timeline</h2>
      <select
        defaultValue="Filter timeline"
        onChange={handleSorting}
        className="select my-6 shadow"
      >
        <option>Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
      <div className="space-y-4">
        {filteredCard.map((t, i) => {
          return (
            <div key={i}>
              <div className="flex items-center gap-4 border border-[#E9E9E9] p-4">
                {" "}
                <div>{t.type === "call" && <img src={callImage} />}</div>{" "}
                <div>{t.type === "text" && <img src={textImage} />}</div>{" "}
                <div>{t.type === "video" && <img src={videoImage} />}</div>{" "}
                <div className="text-[#64748B] flex flex-col gap-1">
                  {" "}
                  <h2>
                    <span className="font-bold text-[#244D3F]">
                      {t.type === "call" && "Call"}{" "}
                      {t.type === "text" && "Text"}{" "}
                      {t.type === "video" && "Video "}
                    </span>{" "}
                    With {t.name}{" "}
                  </h2>
                  <span>{t.date}</span>{" "}
                </div>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;

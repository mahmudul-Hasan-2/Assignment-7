import React, { useContext, useState } from "react";
import { HandlingContext } from "../../Context/Context";
import callImage from "../../assets/call.png";
import textImage from "../../assets/text.png";
import videoImage from "../../assets/video.png";
import { FiAlertTriangle } from "react-icons/fi";

const TimeLine = () => {
  const { timeLine } = useContext(HandlingContext);
  const [filteredCard, setFilteredCard] = useState(timeLine);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedCard = filteredCard.filter((t) =>
      t.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredCard(searchedCard);
  };
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
  console.log(text);
  return (
    <div className="container mx-auto px-2 my-20">
      <h2 className="text-5xl text-[#1F2937] font-bold">Timeline</h2>
      <div className="flex items-center justify-between  flex-wrap">
        <select
          defaultValue="Filter timeline"
          onChange={handleSorting}
          className="select mt-6 mb-0 shadow"
        >
          <option>Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
          <option value="">Text</option>
          <option value="video">Video</option>
        </select>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search timeline..."
            className="input my-6 w-full shadow rounded-r-none rounded-lg  focus:outline-none"
            onChange={handleOnChange}
          />
          <button
            className="btn my-6 rounded-l-none rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {filteredCard.length === 0 && (
        <div className="flex min-h-[300px] w-full flex-col items-center justify-center p-4 text-center">
          <div className="animate-in fade-in zoom-in duration-500">
            <FiAlertTriangle className="mx-auto mb-6 text-6xl text-yellow-500 transition-all hover:scale-110 sm:text-8xl md:text-9xl" />

            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-4xl">
              No History Found!!
            </h2>

            <p className="max-w-xs text-sm text-gray-500 md:max-w-md md:text-lg">
              We couldn't find any data matching your filter. Please try a
              different timeline or check back later.
            </p>
          </div>
        </div>
      )}
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

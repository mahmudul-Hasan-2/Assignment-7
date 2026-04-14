import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const HandlingContext = createContext();

const Context = ({ children }) => {
  const [calls, setCalls] = useState([]);
  const [texts, setTexts] = useState([]);
  const [videos, setVideos] = useState([]);
  const handleCall = (friend) => {
    setCalls((prev) => [...prev, friend]);
    toast.success(`Call with ${friend.name}`);
  };
  const handleText = (friend) => {
    setTexts((prev) => [...prev, friend]);
    toast.success(`Text with ${friend.name}`);
  };
  const handleVideo = (friend) => {
    setVideos((prev) => [...prev, friend]);
    toast.success(`Video with ${friend.name}`);
  };
  const data = {
    calls,
    texts,
    videos,
    handleCall,
    handleText,
    handleVideo,
  };
  return (
    <HandlingContext.Provider value={data}>{children}</HandlingContext.Provider>
  );
};

export default Context;

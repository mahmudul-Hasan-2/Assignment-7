import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import HomePage from "./Components/HomePage/HomePage";
import TimeLine from "./Components/TimeLine/TimeLine";
import Stats from "./Components/Stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "timeline", element: <TimeLine></TimeLine> },
      { path: "stats", element: <Stats></Stats> },
    ],
  },
]);

export default router;

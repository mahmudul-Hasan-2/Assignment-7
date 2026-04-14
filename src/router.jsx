import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import HomePage from "./Components/HomePage/HomePage";
import TimeLine from "./Components/TimeLine/TimeLine";
import Stats from "./Components/Stats/Stats";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import NotFound from "./Components/NotFound/NotFound";

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
      {
        path: "friend/:friendId",
        loader: () => fetch("/friends.json"),
        element: <FriendDetails></FriendDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;

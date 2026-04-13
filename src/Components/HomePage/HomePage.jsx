import React, { Suspense } from "react";
import Banner from "../../Parts/Banner/Banner";
import Friends from "../../Parts/Friends/Friends";
import { ClipLoader } from "react-spinners";

const friendsPromise = async () => {
  let res = await fetch("/friends.json");
  let data = await res.json();
  return data;
};

const friends = friendsPromise();
const HomePage = () => {
  return (
    <div className="container mx-auto my-20 space-y-10">
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <ClipLoader></ClipLoader>
          </div>
        }
      >
        <Friends friends={friends}></Friends>
      </Suspense>
    </div>
  );
};

export default HomePage;

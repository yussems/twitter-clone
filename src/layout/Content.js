import React, { useEffect, useState } from "react";
import Divider from "../componenets/Divider";
import FeedList from "../componenets/FeedList";
import TweetBox from "../componenets/TweetBox";
import db from "../firebase";
import { PopulerIcon } from "../icons/icons";

const Content = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    db.collection('feed')
    .orderBy('timestamp','desc')
    .onSnapshot(snapShot => setTweets(snapShot.docs.map(doc => doc.data())))
  },[]);
  const URL =
    "https://pbs.twimg.com/profile_images/1320727601418280960/50Dj-HdE_400x400.jpg";

  return (
    <main className="flex-1 bg-primary-light flex flex-col border-r border-l border-gray-extraLight">
      <header className="flex justify-between z-10 items-center border-b bg-white border-gray-extraLight p-4 sticky top-0">
        <span className="text-xl font-bold text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img src={URL} className="w-11 h-11 rounded-full" alt="profil-photo" />
        {/* tweet box */}
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets}/>
    </main>
  );
};

export default Content;

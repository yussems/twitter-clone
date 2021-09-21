import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((item, index) => {
        return <FeedItem {...item} key={index} />;
      })}
    </div>
  );
};

export default FeedList;

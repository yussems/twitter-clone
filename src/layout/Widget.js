import React from "react";
import { SearchIcon } from "../icons/icons";
import { Timeline } from 'react-twitter-widgets'
const Widget = () => {
  return (
    <aside className="bg-primary-light w-80">
      <div className="flex items-center space-x-2 p-2 m-3  bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent outline-none w-full text-sm  focus:outline-none"
        />
      </div>
      <div className="mt-4">

        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "Metehan478",
          }}
          options={{
            height: "1000",
          }}
        />
      </div>
    </aside>
  );
};

export default Widget;

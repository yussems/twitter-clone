import React, { useState } from "react";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/icons";
import db from '../firebase'
import firebase from 'firebase'
function TweetBox() {
  const [content, setContent] = useState("");


    const sendTweet = () => {
        if(content !== '') {
            db.collection('feed').add({
                displayName:'Faruk Turkoglu',
                username:'hawk435',
                content,
                image:'https://pbs.twimg.com/profile_images/1320727601418280960/50Dj-HdE_400x400.jpg',
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                avatar:'https://pbs.twimg.com/profile_images/1320727601418280960/50Dj-HdE_400x400.jpg'
            })
            setContent('')
        }
    }
  return (
    <div className="flex flex-1 flex-col mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's Happening"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button onClick={sendTweet} className="bg-primary-base text-white rounded-full px-4 py-2 font-medium">
          tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;

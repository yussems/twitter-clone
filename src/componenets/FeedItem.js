import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/icons";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) => {
  console.log(avatar);
  return (
    <div>
      <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
        <img src={avatar} alt="profile" className="w-11 h-11 rounded-full" />
        <div className='flex-1'>
          <div className="flex items-center text-sm">
            <h4 className="font-bold">{displayName}</h4>
            <span className="  ml-2 text-gray-dark">{username}</span>
            <div className="mx-2 h-2 w-2 bg-gray-dark border rounded-full" />
            <span className="text-gray-dark">
              {timestamp?.toDate().toLocaleTimeString("tr-Tr")}
            </span>
          </div>
          <p className='mt-2 text-gray-900 text-sm'>{content}</p>
          
          {
              image && (
                  <img src={image} className='my-2 rounded-xl max-h-96'/>
              )
          }
            <ul className='-ml-1 mt-3 flex justify-between max-w-md'>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                        <ReplyIcon className='w-5 h-5 group-hover:text-primary-base'/>
                    </div>
                    <span className='group-hover:text-primary-base'>7</span>
                </li>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                        <ReTweetIcon className='w-5 h-5 group-hover:text-green-400'/>
                    </div>
                    <span className='group-hover:text-green-400'>7</span>
                </li>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                        <LikeIcon className='w-5 h-5 group-hover:text-red-400'/>
                    </div>
                    <span className='group-hover:text-red-400'>7</span>
                </li>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                        <ShareIcon className='w-5 h-5 group-hover:text-primary-base'/>
                    </div>
                </li>
                
            </ul>
        </div>
      </article>
    </div>
  );
};

export default FeedItem;

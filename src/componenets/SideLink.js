import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name
  const  handleClick = (e) => {
    e.preventDefault()
    onMenuItemClick(name)
  }
  return (
    <li onClick={handleClick}>
      <a
        href={name.toLowerCase()}
        className="group cursor-pointer block text-xl "
      >
        <div className="inline-block">
          <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 py-3 pr-8  transform transition-colors duration-200 
            ${isActive ? 'text-primary-base' : ''}
          `}>
            <Icon />
            <span className="ml-4 font-bold ">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;

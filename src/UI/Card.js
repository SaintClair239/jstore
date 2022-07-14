import React from 'react';

function Card(props) {
  const className = props.className;
  return (
    <div
      className={`w-80 h-100 p-2 my-4 border-2 border-neutral-200 rounded-xl ${className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
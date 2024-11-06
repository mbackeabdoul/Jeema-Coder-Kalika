import React from 'react';

function Button({ text, className }) {
  return <button className={`py-2 px-4 rounded ${className}`}>{text}</button>;
}

export default Button;

import React from 'react';

const Pill = ({ children }) => {
  return (
    <div className="inline-block text-xs py-0.5 px-1.5 bg-zinc-200 text-zinc-800 rounded-lg mr-2 mb-1 font-semibold shadow">
      {children}
    </div>
  );
};

export default Pill;

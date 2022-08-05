import React from 'react';
import Pill from './Pill';

const Job = ({ job }) => {
  return (
    <div className="w-full mx-auto p-3 bg-zinc-100 rounded-lg shadow-xl shadow-zinc-100/20 text-zinc-800 mb-5 flex flex-col md:flex-row items-center">
      <img
        className="rounded-full w-16 md:mr-4 shadow-lg"
        src={`/${job.img}.jpg`}
      />
      <div className="text-center md:text-left">
        <h3 className="text-3xl font-bold">{job.title}</h3>
        <h4 className="text-2xl italic">{job.company}</h4>
        <div>
          {job.tags.map((tag, i) => (
            <Pill key={Date.now() + i}>{tag}</Pill>
          ))}
        </div>
      </div>
      <div className="md:grow"></div>
      <div>
        <h4 className="text-xl font-semibold underline">
          {job.length}
          {job.current && ' (current)'}
        </h4>
      </div>
    </div>
  );
};

export default Job;

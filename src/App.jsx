import React, { useEffect } from 'react';
import Project from './components/Project';
import Job from './components/Job';
import software from './software';
import jobs from './jobs';
import resume from '../public/resume.pdf';

const App = () => {
  const thisYear = () => {
    return new Date().getFullYear();
  };

  useEffect(() => {
    console.log(jobs);
  }, []);

  return (
    <>
      <div className="mx-auto">
        <div className="text-5xl md:text-6xl font-extrabold mx-auto text-center mt-3">
          <h1 className="inline bg-clip-text p-2 text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
            Jonah Alligood
          </h1>
        </div>
        <h2 className="text-center text-2xl md:text-3xl mt-2 italic px-2">
          Fullstack Software Engineer
        </h2>
      </div>
      <div className="w-[95%] md:w-1/2 mx-auto mt-5 flex flex-col md:flex-row items-center bg-zinc-800 p-5 rounded-lg shadow-xl">
        <img
          src="/newpfp.jpg"
          className="w-32 rounded-full drop-shadow-md"
        />
        <div className="text-center grow mt-5 md:mt-0">
          <div className="font-bold text-2xl">Contacts & Credentials</div>
          <div className="grow underline text-xl">
            <a
              href={resume}
              target="_blank"
              className="mr-5"
              rel="noreferrer"
            >
              Resumé
            </a>
            <a
              href="mailto:jonahisadev@gmail.com"
              className="mr-5"
            >
              Email
            </a>
            <a
              href="https://github.com/jonahisadev"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jonah-alligood"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <h3 className="font-extrabold text-3xl my-5 text-center">
        Software Spotlight
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-5 my-3 mb-5">
        {software.map((proj, i) => (
          <Project
            key={Date.now() + i}
            project={proj}
          />
        ))}
      </div>
      <h3 className="font-extrabold text-3xl my-5 text-center">
        Experience & Education
      </h3>
      <div className="px-5">
        {jobs.map((job, i) => (
          <Job
            key={Date.now() + i}
            job={job}
          />
        ))}
      </div>
      <h3 className="font-extrabold text-3xl my-5 text-center">
        Want Me on Your Team?
      </h3>
      <p className="px-5 text-xl md:w-2/3 md:mx-auto mb-5">
        <a
          href="mailto:jonahisadev@gmail.com"
          className="text-zinc-400 underline hover:text-zinc-300 transition-colors"
        >
          Shoot me an email{' '}
        </a>
        and include what your favorite pizza topping is. I personally like
        <a
          href="https://mikeshothoney.com/"
          className="text-zinc-400 underline hover:text-zinc-300 transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Mike&apos;s Hot Honey
        </a>
        ! Try it out if you haven&apos;t yet. I&apos;d be happy to grab a quick
        call with you and figure out how we can benefit each other!
      </p>
      <h4 className="text-center text-zinc-500 font-bold my-3">
        Copyright &copy; {thisYear()} Jonah Alligood
      </h4>
    </>
  );
};

export default App;

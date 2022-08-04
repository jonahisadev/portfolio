import Project from './components/Project';
import software from './software';
import resume from '../public/resume.pdf'

const App = () => {

  const thisYear = () => {
    return (new Date()).getFullYear();
  }

  return (
    <>
      <div className="mx-auto">
        <div className="text-5xl md:text-6xl font-extrabold mx-auto text-center mt-3">
          <h1
            className="inline bg-clip-text p-2 text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600"
          >
            Jonah Alligood
          </h1>
        </div>
        <h2 className="text-center text-2xl md:text-3xl mt-2 italic">
          Fullstack Software Engineer
        </h2>
      </div>
      <div className="w-[95%] md:w-1/2 mx-auto mt-5 flex flex-col md:flex-row items-center bg-zinc-800 p-5 rounded-lg shadow-xl">
        <img src="/newpfp.jpg" className="w-32 rounded-full drop-shadow-md" />
        <div className="text-center grow mt-5 md:mt-0">
          <div className="font-bold text-2xl">Contacts & Credentials</div>
          <div className="grow underline text-xl">
            <a href={resume} target="_blank" className="mr-5">
              Resumé
            </a>
            <a href="mailto:jonahisadev@gmail.com" className="mr-5">
              Email
            </a>
            <a href="https://github.com/jonahisadev" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <h3 className="font-extrabold text-3xl my-5 text-center">Software Spotlight</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-5 my-3">
        {
          software.map(proj => (
            <Project project={proj} />
          ))
        }
      </div>
      <h4 className="text-center text-zinc-500 font-bold my-3">Copyright &copy; {thisYear()} Jonah Alligood</h4>
    </>
  )
}

export default App

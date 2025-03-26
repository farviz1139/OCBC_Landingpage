function NavBar({ scrollToSignup, setOpen }) {
  return (
    <div className="bg-white text-black border-b border-black">
      <div className="flex justify-between w-full px-5 py-5 ">
        <p className="py-2 px-2 font-bold cursor-pointer ml-20 text-xl font-serif">Start BootStrap</p>
        <div>
          <button onClick={() => setOpen(true)} className="px-4 py-2 border border-black rounded cursor-pointer bg-green-500 text-white mx-10">Enquire</button>
          <button className="px-4 py-2 border border-black rounded cursor-pointer bg-blue-500 text-white "
          onClick={scrollToSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}


export default NavBar

function NavBar() {
  return (
    <div className="bg-white text-black border-b border-black">
      <div className="flex justify-between w-full px-5 py-5 ">
        <p className="py-2 px-2 font-bold cursor-pointer ml-20 text-xl font-serif">Start BootStrap</p>
        <button className="px-4 py-2 border border-black rounded cursor-pointer bg-blue-500 text-white mr-20">Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar

import { useNavigate } from 'react-router-dom';

function NavBar({ scrollToSignup, setOpen }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-black border-b border-black">
      <div className="flex justify-between w-full px-5 py-5 ">
        <p className="py-2 px-2 font-bold cursor-pointer ml-20 text-xl font-serif" onClick={() => navigate('/')}>Start BootStrap</p>
        <div>
        <button className="px-4 py-2 border border-black rounded cursor-pointer bg-black text-white mr-10" onClick={() => navigate('/shop')}>Shop</button>
          <button className="px-4 py-2 border border-black rounded cursor-pointer bg-black text-white mr-10" onClick={() => navigate('/calculator')}>Calculator</button>
          <button className="px-4 py-2 border border-black rounded cursor-pointer bg-red-500 text-white" onClick={() => navigate('/todo')}>TodoList</button>
          <button onClick={() => setOpen(true)} className="px-4 py-2 border border-black rounded cursor-pointer bg-green-500 text-white mx-10">Enquire</button>
          <button className="px-4 py-2 border border-black rounded cursor-pointer bg-blue-500 text-white "
          onClick={scrollToSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}


export default NavBar

import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";

function EnquiryForm({ isOpen, onClose }) {

    if (!isOpen) return null;


    return(
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50%">
            <div className="relative flex text-black flex-col px-10 py-10 w-1/3 border border-black rounded-xl  bg-gradient-to-r from-blue-500 to-blue-200 ">
                <div className="absolute top-3 right-3 cursor-pointer"><IoMdCloseCircle onClick={onClose} size={20}/></div>
                <div className="flex justify-center">
                    <h1  className="font-bold text-2xl text-center pr-5 font-serif">Contact Us</h1>
                    <MdOutlineContactPhone className="mt-0.1" size={30}/>
                </div>
                <label className="block  py-2">Name</label>
                <input className="py-2  px-1 border border-black rounded bg-white"  placeholder="Enter your name"/>
                <label className="block  py-2">E-mail</label>
                <input className="py-2  px-1 border border-black rounded bg-white" placeholder="Enter your e-mail"/>
                <label className="block  py-2">Contact Number</label>
                <input className="py-2  px-1 border border-black rounded bg-white" placeholder="Enter your number"/>
                <label className="block  py-2">Message</label>
                <input className="py-2  px-1 border border-black rounded bg-white" placeholder="Enter your message"/>
                <button  className="mt-10  mx-30  py-2 text-xl rounded  border border-black bg-blue-500 text-white cursor-pointer">Submit</button>
            </div>
        </div>
    );
}

export default EnquiryForm
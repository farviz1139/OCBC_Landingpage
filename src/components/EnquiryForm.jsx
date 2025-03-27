import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";

function EnquiryForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const validateForm = () => {
        if (!name.trim() || !email.trim() || !number.trim() || !message.trim()) {
            alert('All fields are required')
            return false
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Invalid email address')
            return false
        }


        if (!number.match(/^[89]\d{7}$/)) {
            alert("Invalid Phone Number !!");
            return false
        }

        if (!message.trim()) {
            alert("Message cannot be empty")
            return false
        }

        return true
  }

  const handleSubmit = () => {
    if (validateForm()) {
        console.log({ name, email, number, message });
        alert(`Thanks for the enquiry ${name}, we will get back to you soon!`);
        onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50% ">
      <div className="relative flex text-black flex-col px-10 py-10 w-1/3 border border-black rounded-xl  bg-gray-300 ">
        <div className="absolute top-3 right-3 cursor-pointer">
          <IoMdCloseCircle onClick={onClose} size={20} />
        </div>
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl text-center pr-5">Contact Us</h1>
          <MdOutlineContactPhone className="mt-1.5" size={30} />
        </div>
        <label className="block  py-2">Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="py-2  px-1 border border-black rounded bg-white"
          placeholder="Enter your name"
          name="name"
          type="text"
        />
        <label className="block  py-2">E-mail</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="py-2  px-1 border border-black rounded bg-white"
          placeholder="Enter your e-mail"
          name="email"
          type="email"
        />
        <p className="text-gray-500 text-xs text-center py-1">We will never share your email with anyone</p>
        <label className="block  py-2">Contact Number</label>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className="py-2  px-1 border border-black rounded bg-white"
          placeholder="Enter your number"
          name="number"
          type="number"
        />
        <label className="block  py-2">Message</label>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="py-2  px-1 border border-black rounded bg-white"
          placeholder="Enter your message"
          name="message"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="mt-10  mx-30  py-2 text-xl rounded  border border-black bg-blue-500 text-white cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EnquiryForm;

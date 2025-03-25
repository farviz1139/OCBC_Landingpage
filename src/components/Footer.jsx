import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-between px-25 py-8 bg-gradient-to-r from-black-500 to-blue-500 ">
      <div>
        <div>
          <ul className="flex cursor-pointer">
            <li className=" text-blue-600 underline pr-2 ">About</li>
            <li className="pr-2">.</li>
            <li className="text-blue-600 underline pr-2">Contact</li>
            <li className="pr-2">.</li>
            <li className="text-blue-600 underline pr-2">Terms of Use</li>
            <li className="pr-2">.</li>
            <li className="text-blue-600 underline pr-2">Privacy Policy</li>
          </ul>
        </div>

        <div className="font-bold">
          <p>© Your Website 2023. All Rights Reserved.</p>
        </div>
      </div>

      <div className="flex space-x-4 cursor-pointer my-2">
        <FaTwitter size={35} color="black" />
        <FaFacebook size={35} color="black" />
        <FaTelegram size={35} color="black" />
      </div>
    </div>
  );
}

export default Footer;
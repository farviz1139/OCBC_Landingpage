import { BsBootstrapFill } from "react-icons/bs";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { BsTerminalFill } from "react-icons/bs";



function Properties() {
    return(
        <div className="flex justify-between px-10 py-20 bg-gradient-to-r from-blue-500 to-purple-500 border-b border-black-500">
            <div className="text-center">
                <div className="mx-9">
                <MdOutlineScreenshotMonitor size={150} color="black"/>
                </div>
                <h1 className="font-bold text-2xl my-2">Fully Responsive</h1>
                <p>Life is full of colors</p>
                <p>Some are vibrant and some are dull</p>
            </div>
            <div className="text-center">
                <div className="mx-11">
                    <BsBootstrapFill size={150} color="black"/>
                </div>
                <h1 className="font-bold text-2xl my-2">Bootstrap 5 Ready</h1>
                <p>but there will always be this particular color</p>
                <p>which will forever be etched in the mind</p>
            </div>
            <div className="text-center">
                <div className="mx-11">
                    <BsTerminalFill size={150} color="black"/>
                </div>
                <h1 className="font-bold text-2xl my-2">Easy to Use</h1>
                <p>It all happened about two year ago</p>
                <p>or customize the source files!</p>
            </div>
        </div>
    );

}

export default Properties
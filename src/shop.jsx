import { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function Cart({ number, open }) {
    return (
        <div 
            onClick={open} 
            className="flex items-center space-x-2 cursor-pointer"
        >
            <FaShoppingCart className="text-5xl text-black" />
            <p className="text-lg font-semibold">{number}</p>
        </div>
    );
}

function Search(){
    const [input, setInput] = useState('');
    return <>
        <div className="flex flex-row items-center justify-center w-full">
            <input className="w-130 p-3 rounded-full border-solid border-2" 
            placeholder="Search Here..."
            value = {input}
            onChange={(e) => setInput(e.target.value)}></input>
            <CiSearch className="ml-2 text-5xl p-2 text-white bg-blue-600 rounded-full" onClick={() => setInput('')}></CiSearch>
        </div>
    </>
}

function Product({ item, countN, adding}) {
    return (
        <div className="flex flex-col items-center justify-center w-full cursor-pointer" 
        onClick={() => {countN(); adding(item.name, item.image, item.price)}}>
            <div className="w-6/8 h-80 bg-none border-solid border-2 my-10 rounded-2xl">
                <img className="rounded-2xl" src={`${item.image}`}/>
                <h1 className="text-center text-black text-xl font-semibold p">{item.name}</h1>
                <h1 className="text-center text-black text-xl">{item.price}</h1>
            </div>
        </div>
    );
}

function Timer({timer}){
    return <>
    <h1>Time spent: {timer}</h1>
    </>
}

function Modal({ onClose, cartitem }) {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                <div className="w-120 max-h-160 bg-white rounded-3xl overflow-hidden flex flex-col">
                    <div className="flex justify-end p-4">
                        <MdCancel className="text-3xl cursor-pointer text-gray-700" onClick={onClose} />
                    </div>

                    <div className="px-6 py-4 overflow-y-auto flex-1">
                        {cartitem.length > 0 ? (
                            cartitem.map((item, index) => (
                                <div key={index} className="flex items-center border-b py-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                                    <div className="ml-4">
                                        <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                                        <h1 className="text-gray-600">{item.price}</h1>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1 className="text-gray-800 text-center">Cart is empty</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


function Shop(){
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const addCount = () => {
        setCount(count + 1);
    }

    const addItem = (name, image, price) => {
        setItems([...items, {name,image,price}]);
    };
    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
    
        return () => clearInterval(timer); 
    }, []);

    return <>
        <div className="flex flex-col items-top justify-top h-screen w-full py-10">
            <div className="w-full flex justify-end pr-10">
                <Cart open={() => setShowModal(true)} number={count} />
            </div>
            {showModal && <Modal onClose={()=> setShowModal(false)} cartitem={items}/>}
            <Search/>
            <div className="flex flex-row w-full items-center justify-center">
                <Product item={{ name: "Laptop", image:"../src/assets/image3.jpg", price:"$1999" }} countN={addCount} adding={addItem} />
                <Product item={{ name: "Phone", image:"../src/assets/image3.jpg", price:"$1999" }} countN={addCount} adding={addItem}/>
                <Product item={{ name: "Macbook", image:"../src/assets/image3.jpg", price:"$1999" }} countN={addCount} adding={addItem}/>
                <Product item={{ name: "Switch", image:"../src/assets/image3.jpg", price:"$1999" }} countN={addCount} adding={addItem}/>
            </div>
            <div className="flex flex-row w-full justify-end p-0">
                <Timer timer={time}/>
            </div>
        </div>
    </>
}

export default Shop;

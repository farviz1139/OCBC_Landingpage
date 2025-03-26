import { useState } from 'react'

const initialitems = [
];

function List({ todos, onDelete }) {
  return (
    <div className="flex flex-row justify-left items-left w-full py-8 text-black">

      <div className="flex flex-col w-full">
        {todos.map((item, index) => (
          <div className="flex flex-row h-12 w-full justify-center items-center py-2 my-2 bg-white rounded-3xl">
            <p className="text-xl text-semibold" key={index}>{item}</p>
            <button className="bg-red-500 rounded-md p-1 mx-3 text-white"
            onClick={
              () => {
                onDelete(index);
              }
            }>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Todo() {
  const [items, setItems] = useState(initialitems);
  const [input, setInput] = useState('');
  
  const handleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return <>
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-col w-4/8 h-7/8 items-center bg-gray-800 rounded-3xl pb-4">
            <div className="flex flex-row w-3/4 py-8">
                <input className="text-white w-120 h-16 px-4 border-solid border-white border-2 rounded-full" 
                placeholder="Type Here..."
                value = {input}
                onChange={(e) => setInput(e.target.value)}></input>
                <button className="text-white mx-3 bg-blue-600 rounded-full w-15 h-15 text-3xl" 
                onClick = {() => {
                  if (input === ""){
                    setInput('');
                  }
                  else{
                    setItems([...items, input]);
                    setInput('');
                  }
                }}>+</button>
            </div>
            <div className="flex flex-col w-3/4">
                <List todos={items} onDelete={handleDelete} />
            </div>
        </div>
    </div>
  </>
}

export default Todo

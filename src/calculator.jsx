import { useState } from "react";

function Value(props) {
  return (
    <button
      className={`rounded-full ${
        props.color || "bg-gray-700"
      } p-5 mx-2 text-bold text-3xl text-center w-20 h-20 text-white`}
      onClick={() => props.action(props.value)}
    >
      <p>{props.value}</p>
    </button>
  );
}

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (input) => {
    if (input === "AC") {
      setValue("");
    } else if (input === "←") {
      setValue(value.slice(0, -1));
    } else if (input === "=") {
      try {
        setValue(eval(value.replace("X", "*").replace("÷", "/")));
      } catch {
        setValue("Error");
      }
    } else if (input === "%") {
      setValue(value / 100).toString();
    } else {
      setValue(value + input);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col w-3/11 h-7/8 items-center bg-gray-800 rounded-3xl pb-4">
        <div className="flex w-9/10 h-1/6 text-white bg-white rounded-lg mt-5 items-center px-4">
          <p className="text-black text-xl">{value || "0"}</p>
        </div>
        <div className="flex flex-row mt-5">
          <Value value="AC" action={handleClick} color="bg-gray-400" />
          <Value value="←" action={handleClick} color="bg-gray-400" />
          <Value value="%" action={handleClick} color="bg-gray-400" />
          <Value value="÷" action={handleClick} color="bg-yellow-600" />
        </div>
        <div className="flex flex-row mt-5">
          <Value value="7" action={handleClick} />
          <Value value="8" action={handleClick} />
          <Value value="9" action={handleClick} />
          <Value value="X" action={handleClick} color="bg-yellow-600" />
        </div>
        <div className="flex flex-row mt-5">
          <Value value="4" action={handleClick} />
          <Value value="5" action={handleClick} />
          <Value value="6" action={handleClick} />
          <Value value="-" action={handleClick} color="bg-yellow-600" />
        </div>
        <div className="flex flex-row mt-5">
          <Value value="1" action={handleClick} />
          <Value value="2" action={handleClick} />
          <Value value="3" action={handleClick} />
          <Value value="+" action={handleClick} color="bg-yellow-600" />
        </div>
        <div className="flex flex-row mt-5">
          <Value value="0" action={handleClick} />
          <Value value="00" action={handleClick} />
          <Value value="." action={handleClick} />
          <Value value="=" action={handleClick} color="bg-yellow-600" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;

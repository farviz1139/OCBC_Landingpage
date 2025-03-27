function Signup() {
    return <div id="signup">
        <div className="flex w-full h-80 justify-center items-center text-white flex-col bg-[url('./src/assets/bg-masthead.jpg')] bg-cover bg-center">
            <div className="flex w-2/4 justify-center items-center text-center tracking-widest">
                <h1 className="text-3xl leading-tight font-semibold">Ready to get started? Sign up now!</h1>
            </div>
            <div className="flex flex-row justify-center w-2/4">
                <div className="flex flex-col w-140 mt-5">
                    <input className="h-16 bg-white border-2 border-solid border-red-600 rounded-lg text-black px-6 text-xl" type="text" placeholder="Email Address"></input>
                </div>
                <button className="mt-5 ml-4 w-24 h-16 bg-blue-600 text-white rounded-lg">Submit</button>
            </div>
        </div>
    </div>;
}
  
export default Signup;

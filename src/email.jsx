function Email() {
    return <>
        <div className="flex w-full h-screen justify-center items-center text-white flex-col bg-[url('./src/assets/bg-masthead.jpg')] bg-cover bg-center">
            <div className="flex w-2/4 justify-center items-center text-center tracking-widest">
                <h1 className="text-5xl leading-tight font-semibold">Generate more leads with a professional landing page!</h1>
            </div>
            <div className="flex flex-row w-2/4">
                <div className="flex flex-col ml-12 w-140 mt-15">
                    <input className="h-16 bg-white border-2 border-solid border-red-600 rounded-lg text-black px-6 text-xl" type="text" placeholder="Email Address"></input>
                    <p className="text-center p-2">Email address is required</p>
                </div>
                <button className="mt-15 ml-4 w-24 h-16 bg-blue-600 text-white rounded-lg">Submit</button>
            </div>
        </div>
    </>;
}
  
export default Email;

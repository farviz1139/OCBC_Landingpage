function Specific(props){
    return <>
        <div className="flex flex-col items-center p-4 w-1/4">
            <img src={`https://randomuser.me/api/portraits/women/${props.number}.jpg`}  className="w-48 h-48 rounded-full mb-4 shadow-2xl"></img>
            <h1 className="font-semibold text-2xl py-2">{props.name}</h1>
            <p className="text-center">{props.message}</p>
        </div>
    </>
}

function People() {
    return <>
        <div className="flex w-full h-screen justify-center items-center flex-col">
            <h1 className="text-4xl font-semibold">What people are saying...</h1>
            <div className="flex flex-row mt-15 justify-around">
                <Specific number="1" name="Margaret E." message='"This is fantastic! Thanks so much guys!"'/>
                <Specific number="2" name="Fred S." message='"Bootstrap is amazing. Ive been using it to create lots of super nice landing pages."'/>
                <Specific number="3" name="Sarah W." message='"Thanks so much for making these free resources available to us!"'/>
            </div>
        </div>
    </>;
}
  
export default People;
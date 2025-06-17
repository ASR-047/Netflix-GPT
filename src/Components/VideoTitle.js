

const VideoTitle=({title,overview})=>{

    return(
        <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
                <h1 className="font-bold text-4xl text-white ">{title}</h1>
                <p className="py-6 text-lg w-1/4 text-white ">{overview}</p>
                <div>
                    <button className="text-black text-lg bg-white rounded-lg p-4 px-12 hover:bg-opacity-80"> ▶ Play</button>
                    <button className="text-white text-lg bg-gray-500 rounded-lg p-4 px-10 mx-2 hover:bg-opacity-40 "> More Info</button>
                </div>
        </div>
    )
};

export default VideoTitle;

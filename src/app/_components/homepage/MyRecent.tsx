export const MyRecent = () => {
  return (
    <div className="w-full h-[300px] font-[Austere] bg-blue-500 flex flex-col items-center text-white">
      <p className="text-[60px]">My Recent Projects</p>
      <div className="flex gap-3 w-[300px] h-[50px] justify-around rounded-full bg-black">
        <button className="rounded-full px-[18%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-in-out hover:scale-[1.1] hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500">
          Websites
        </button>
        <button className="rounded-full px-[18%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-in-out hover:scale-[1.1] hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500">
          Design
        </button>
      </div>
    </div>
  );
};

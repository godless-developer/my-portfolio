export const SocialAddress = () => {
  return (
    <div className="w-[700px] p-20 flex flex-col gap-10">
      <div className="w-full h-[80px] flex justify-around items-center">
        <div className="flex gap-2 justify-center items-center rounded-full px-[20px] py-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-in-out hover:scale-[1.1] hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 cursor-pointer">
          <button>Download CV</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </div>
        <div className="flex gap-4 items-center">
          <div className="border-[2px] p-1 rounded-md flex justify-center items-center border-[blue] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="blue"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              fill="none"
              stroke="purple"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="3" ry="3" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <div className="border-[2px] p-1 rounded-md flex justify-center items-center border-[#414141] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#414141"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-[150px] font-[Austere] flex justify-end items-center gap-3">
        <p className="text-[150px] text-white ">5</p>
        <p className="text-[20px] w-[100px] text-white ">Projects Completed</p>
      </div>
    </div>
  );
};

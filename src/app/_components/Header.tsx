import { AvatarDemo } from "@/components/AvatarDemo";

export const Header = () => {
  return (
    <div className=" h-20 flex justify-between w-[1440px] items-center p-5 font-[Austere] font-[900]  text-white fixed">
      <div className="flex items-center gap-4 w-[50%]">
        <AvatarDemo />
        <p className="text-[25px] cursor-pointer duration-200 ease-in-out hover:text-indigo-500">
          Battulga
        </p>
      </div>
      <div className="w-[30%] flex gap-10 text-[22px]">
        <button className=" duration-200 ease-in-out hover:text-indigo-500">
          Aboit
        </button>
        <button className=" duration-200 ease-in-out hover:text-indigo-500">
          Projects
        </button>
        <button className=" duration-200 ease-in-out hover:text-indigo-500">
          Contact
        </button>
      </div>
      <div className="w-[20%] flex justify-center">
        <button className="rounded-full px-[20px] py-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 ease-in-out hover:scale-[1.1] hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500">
          HIRE ME !
        </button>
      </div>
    </div>
  );
};

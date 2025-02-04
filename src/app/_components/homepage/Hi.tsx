import "./hi.css";
export const Hi = () => {
  return (
    <div className="text-transparent p-20 relative h-[800px]">
      <div className="waves-demo">
        <p className="waves" data-word="HI">
          HI
        </p>
      </div>
      <p className="text-[85px] font-[Austere] text-white  absolute top-[40%]">
        Hi, I'm Battulga
      </p>
      <div className="w-[900px] absolute top-[55%] text-white">
        <p className="text-[100px] font-[Austere] text-purple-800">
          Software Engineer & Designer
        </p>
      </div>
    </div>
  );
};

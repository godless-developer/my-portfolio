import { Hi } from "./Hi";
import { MyRecent } from "./MyRecent";
import { SocialAddress } from "./SocialAddress";
import { MainProjectsWebsites } from "./MainProjectsWebsite";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-[1440px] pt-20 overflow-hidden">
      <Hi />
      <SocialAddress />
      <div className="w-[1880px] h-[2px] bg-purple-700 shadow-2xl my-20 shadow-purple-500/50 blur-[2px]"></div>
      <MyRecent />
      <MainProjectsWebsites />
    </div>
  );
};

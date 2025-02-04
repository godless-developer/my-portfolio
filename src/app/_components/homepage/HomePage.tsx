import { Hi } from "./Hi";
import { MyRecent } from "./MyRecent";
import { SocialAddress } from "./SocialAddress";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-[1440px] pt-20 overflow-hidden">
      <Hi />
      <SocialAddress />
      <MyRecent />
    </div>
  );
};

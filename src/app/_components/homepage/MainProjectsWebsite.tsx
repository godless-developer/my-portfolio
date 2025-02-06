import { CardProject } from "./CardProject";

export const MainProjectsWebsites = () => {
  return (
    <div className="flex items-center gap-40 justify-center min-h-[900px] w-[1400px] flex-wrap ">
      <CardProject
        title="Mobicom"
        date="Novewber 24"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        glowColor="rgba( 255, 0, 0)"
        hoverColor="hover:text-red-600"
      />
      <CardProject
        title="Unread"
        date="OCTOBER 22"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        glowColor="rgba(0, 0, 255)"
        hoverColor="hover:text-blue-600"
      />
    </div>
  );
};

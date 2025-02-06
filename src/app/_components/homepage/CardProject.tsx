export const CardProject = ({
  title,
  date,
  description,
  glowColor,
  hoverColor,
  hoverSee,
}) => {
  return (
    <div
      className={`relative w-80 h-48 p-6 rounded-2xl hover:bg-pink-200 text-white cursor-pointer duration-500 ease-in-out ${hoverColor} hover:scale-110 hover:rotate-6`}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 40%, ${glowColor} 90%)`,
        boxShadow: `0 4px 20px ${glowColor}`,
      }}
    >
      {/* Date Badge */}
      <div
        className="absolute top-4 left-4  bg-opacity-70 text-center py-1 px-3 rounded-md text-sm"
        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
      >
        <div className="font-bold">{date}</div>
      </div>

      {/* Title */}
      <h3 className="mt-8 text-lg font-bold">{title}</h3>

      {/* Description */}
      <p className="text-sm opacity-80 mt-2">{description}</p>

      {/* CTA */}
      <div className="absolute bottom-4 left-6 text-white  font-semibold cursor-pointer hover:underline">
        SEE PROJECT
      </div>
    </div>
  );
};

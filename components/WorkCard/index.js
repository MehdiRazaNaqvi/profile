import React from "react";
import { useTheme } from "next-themes";



const WorkCard = ({ img, name, description, onClick }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div

      className={`overflow-hidden rounded-lg p-0 laptop:p-4 first:ml-0 link w-full ${theme === "dark" ? "border border-gray-800 border-opacity-50" : "border border-gray-300"}`}
      onClick={onClick}
    >
      <div

        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "300px" }}
      >
        <img
          alt={name}
          className="h-full w-full hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>

      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;

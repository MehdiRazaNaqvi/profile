import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import ConstructionIcon from '@mui/icons-material/Construction';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import NightsStayIcon from '@mui/icons-material/NightsStay';


const ServiceCard = ({ name, description, id }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();



  const Iconsize = "3rem"


  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
        } hover:scale-105 link`}
    >


      <h1 className="text-3xl">


        {
          id == 1 ? <DesignServicesIcon className="only_desktop" sx={{ marginRight: "1rem", fontSize: Iconsize }} />
            : id == 2 ? <CodeIcon className="only_desktop" sx={{ marginRight: "1rem", fontSize: Iconsize }} />
              : id == 3 ? <StorageIcon className="only_desktop" sx={{ marginRight: "1rem", fontSize: Iconsize }} />
                : id == 4 ? <ConstructionIcon className="only_desktop" sx={{ marginRight: "1rem", fontSize: Iconsize }} />

                  : id == 5 ? <SpaceDashboardIcon className="only_desktop" sx={{ marginRight: "1rem", fontSize: Iconsize }} />
                    : id == 6 ? <NightsStayIcon className="only_desktop" sx={{ marginRight: "1rem", fontSize: Iconsize }} />
                      :
                      <CodeIcon className="only_desktop" sx={{ marginRight: "1rem", Iconsize }} />




        }



        {name ? name : "Heading"}</h1>

      <p className={`mt-5 ${mounted && theme == "dark" ? "opacity-40" : "opacity-80"} text-xl`}>
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>



    </div>
  );
};

export default ServiceCard;

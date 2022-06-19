import React from "react";
import Navbar from "../components/navbar";
import {WorkLink} from "../components/work";

const zoomPage: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Work Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        {/* Work Left */}
        <div className="bg-opacity-100 saturate-100 bg-blue-500
        flex flex-col items-center justify-center h-[30vh] lg:h-auto
        text-white text-4xl md:text-5xl font-semibold leading-10"
        >
          <span>
            <WorkLink  href="https://status.zoom.us/">
            Zoom
            </WorkLink>{" "}
            Integration
          </span>
        </div> {/* Work Left */}
        {/* Work Right */}
        <div className="bg-white h-[70vh] lg:min-h-screen flex flex-1 lg:items-center text-center justify-center ">
          <div className="w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
            Hello World!
          </div>
        </div> {/* Work Right */}
      </div> {/* Work Container */}
    </>
  );
};

export default zoomPage;

import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkAndLight = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <section>
      <div>
        {mode === "light" ? (
          <button
            onClick={toggleMode}
            className="text-2xl bg-slate-200 w-8 h-8 flex justify-center items-center rounded-full"
          >
            <MdDarkMode />
          </button>
        ) : (
          <button
            onClick={toggleMode}
            className="text-2xl bg-slate-700 text-white w-8 h-8 flex justify-center items-center rounded-full"
          >
            <MdLightMode />
          </button>
        )}
      </div>
    </section>
  );
};

export default DarkAndLight;

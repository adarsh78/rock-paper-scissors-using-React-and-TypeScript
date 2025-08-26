import { Outlet } from "react-router-dom";
import Score from "./Component/Score";
import { useState } from "react";
import Rules from "./Component/Rules";

const App = () => {

  const [rulesOpen, setIsRulesOpen] = useState<boolean>(false);

  const handleRulesClick = () => {
    setIsRulesOpen(true);
  }
  return (
    <>
      <div className="flex justify-center min-h-screen pt-[1.5rem] pb-[3rem] w-screen text-white bg-gradient-to-b from-[hsl(214,47%,23%)] to-[hsl(237,49%,15%)]">
        <div className="flex flex-col items-center justify-between">
          <Score />
          <Outlet />
          <button 
          onClick={handleRulesClick}
          className="cursor-pointer border-2 border-[hsl(217,16%,45%)] rounded-md py-1 px-7 tracking-widest">
            RULES
          </button>
        </div>
        <Rules rulesOpen={rulesOpen} setIsRulesOpen={setIsRulesOpen}/>
      </div>
    </>
  );
};

export default App;

// bg-radial from-pink-400 from-40% to-fuchsia-700   hsl(214,47%,23%) to hsl(237,49%,15%)

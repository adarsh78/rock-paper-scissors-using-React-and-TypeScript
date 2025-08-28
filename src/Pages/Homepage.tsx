import { useNavigate } from "react-router-dom";
import { useAppcontext } from "../Context/AppContextProvider";

const Homepage = () => {
  const { handleUserImageClick } = useAppcontext();
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-[250px] mx-auto">
        {/* background triangle */}
        <img
          src="./images/bg-triangle.svg"
          alt="bg-triangle"
          className="w-full"
        />

        {/* Paper */}
        <div
          onClick={() => {
            handleUserImageClick("./images/icon-paper.svg");
            navigate("/gamepage");
          }}
          className="absolute bottom-[10rem] left-0 bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] rounded-full w-24 h-24 flex items-center justify-center cursor-pointer"
        >
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
            <img src="./images/icon-paper.svg" alt="paper" width="30" />
          </div>
        </div>

        {/* Scissors */}
        <div
          onClick={() => {
            handleUserImageClick("./images/icon-scissors.svg");
            navigate("/gamepage");
          }}
          className="absolute bottom-[10rem] right-0 bg-gradient-to-r from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] rounded-full w-24 h-24 flex items-center justify-center cursor-pointer"
        >
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
            <img src="./images/icon-scissors.svg" alt="scissors" width="30" />
          </div>
        </div>

        {/* Rock */}
        <div
          onClick={() => {
            handleUserImageClick("./images/icon-rock.svg");
            navigate("/gamepage");
          }}
          className="absolute bottom-1 left-[5rem] bg-gradient-to-r from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)] rounded-full w-24 h-24 flex items-center justify-center cursor-pointer"
        >
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
            <img src="./images/icon-rock.svg" alt="rock" width="30" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

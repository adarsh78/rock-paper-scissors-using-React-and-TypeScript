import { useNavigate } from "react-router-dom";
import { useAppcontext } from "../Context/AppContextProvider";

const Homepage = () => {
  const { handleUserImageClick } = useAppcontext();
  const navigate = useNavigate();

  return (
    <>
      <div className="relative top-[10rem]">
        <img src="./images/bg-triangle.svg" alt="bg-triangle" width="200px" />
      </div>

      <div
        onClick={() => {
          const src = "./images/icon-paper.svg";
          handleUserImageClick(src);
          navigate("/gamepage");
        }}
        className="bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] rounded-full w-25 h-25 flex items-center justify-center relative bottom-[4.3rem] right-[4rem]"
      >
        <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
          <img src="./images/icon-paper.svg" alt="icon-paper" width="30" />
        </div>
      </div>

      <div
        onClick={() => {
          const src="./images/icon-scissors.svg";
          handleUserImageClick(src);
          navigate("/gamepage");
        }}
        className="bg-gradient-to-r from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] rounded-full w-25 h-25 flex items-center justify-center relative bottom-[12rem] left-[4rem]"
      >
        <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
          <img
            src="./images/icon-scissors.svg"
            alt="icon-scissors"
            width="30"
          />
        </div>
      </div>

      <div
        onClick={() => {
          const  src="./images/icon-rock.svg";
          handleUserImageClick(src);
          navigate("/gamepage");
        }}
        className="bg-gradient-to-r from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)] rounded-full w-25 h-25 flex items-center justify-center relative bottom-[12rem] right-[0rem]"
      >
        <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
          <img src="./images/icon-rock.svg" alt="icon-rock" width="30" />
        </div>
      </div>
    </>
  );
};

export default Homepage;

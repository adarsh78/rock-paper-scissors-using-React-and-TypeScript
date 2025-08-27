import { useNavigate } from "react-router-dom";
import { useAppcontext } from "../Context/AppContextProvider";
import { useEffect, useState,} from "react";

const Gamepage = () => {
  const { userPickedImage, housePickedImage, setScore } = useAppcontext();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("");

  interface Images {
    [key: string]: string;
  }
  const bgColor: Images = {
    "./images/icon-paper.svg":
      "bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]",
    "./images/icon-scissors.svg":
      "bg-gradient-to-r from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)]",
    "./images/icon-rock.svg":
      "bg-gradient-to-r from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]",
  };

  const getScore = (userImage: string, houseImage: string) => {
    if (
      userImage === "./images/icon-paper.svg" &&
      houseImage === "./images/icon-scissors.svg"
    ) {
      setStatus("you lose");
    } else if (
      userImage === "./images/icon-paper.svg" &&
      houseImage === "./images/icon-rock.svg"
    ) {
      setStatus("you won");
    } else if (
      userImage === "./images/icon-scissors.svg" &&
      houseImage === "./images/icon-rock.svg"
    ) {
      setStatus("you lose");
    } else if (
      userImage === "./images/icon-scissors.svg" &&
      houseImage === "./images/icon-paper.svg"
    ) {
      setStatus("you won");
    } else if (
      userImage === "./images/icon-rock.svg" &&
      houseImage === "./images/icon-scissors.svg"
    ) {
      setStatus("you won");
    } else if (
      userImage === "./images/icon-rock.svg" &&
      houseImage === "./images/icon-paper.svg"
    ) {
      setStatus("you lose");
    } else {
      setStatus("Tie");
    }
  };

  useEffect(() => {
    getScore(userPickedImage, housePickedImage);
  }, [userPickedImage, housePickedImage]);

  const result = (status: string) => {
    if(status === "you won"){
      setScore(prev => prev + 1);
    }
    else if(status === "you lose"){
      setScore(prev => prev - 1);
    }
  }

  useEffect(() => {
    result(status);
  }, [status])

  return (
    <>
      <div className="flex justify-between items-center gap-[5rem] mb-[5rem]">
        <div className="flex flex-col items-center gap-5">
          <div
            className={`${bgColor[userPickedImage]} rounded-full w-25 h-25 flex items-center justify-center`}
          >
            <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
              <img
                src={userPickedImage || undefined}
                alt="icon-scissors"
                width="30"
              />
            </div>
          </div>
          <p className="tracking-widest uppercase">You Picked</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div
            className={`${bgColor[housePickedImage]} rounded-full w-25 h-25 flex items-center justify-center`}
          >
            <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
              <img
                src={housePickedImage || undefined}
                alt="icon-scissors"
                width="30"
              />
            </div>
          </div>
          <p className="tracking-widest uppercase">The House Picked</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="uppercase text-[3rem]">{status}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-[hsl(229,25%,31%)] px-[3rem] py-[0.5rem] rounded-md hover:bg-[hsl(229,25%,31%)] hover:text-white cursor-pointer"
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default Gamepage;

import { useAppcontext } from "../Context/AppContextProvider";

const Gamepage = () => {
  const { userPickedImage, housePickedImage } = useAppcontext();
  return (
    <>
      <div className="bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] rounded-full w-25 h-25 flex items-center justify-center">
        <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
          <img src={userPickedImage} alt="icon-scissors" width="30" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] rounded-full w-25 h-25 flex items-center justify-center">
        <div className="bg-white rounded-full w-18 h-18 flex items-center justify-center">
          <img src={housePickedImage} alt="icon-scissors" width="30" />
        </div>
      </div>
    </>
  );
};

export default Gamepage;

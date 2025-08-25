import { createContext, useContext, useState } from "react";

interface CounterContextType {
  score: number;
  userPickedImage: string;
  housePickedImage: string;
  handleUserImageClick: (src: string) => void;
}

export const AppContext = createContext<CounterContextType | undefined>(
  undefined
);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState<number>(() => {
    const storedScore = localStorage.getItem("score");
    return storedScore !== null ? Number(storedScore) : 0;
  });

  const [userPickedImage, setUserPickedImage] = useState<string>("");
  const [housePickedImage, setHousePickedImage] = useState<string>("");

  const houseImageOptions: string[] = [
    "./images/icon-paper.svg",
    "./images/icon-scissors.svg",
    "./images/icon-rock.svg",
  ];

  const handleUserImageClick = (src: string) => {
      setUserPickedImage(src);
      const random = Math.floor(Math.random() * 3);
      setHousePickedImage(houseImageOptions[random]);

  };

  return (
    <AppContext.Provider
      value={{
        score,
        userPickedImage,
        housePickedImage,
        handleUserImageClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppcontext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Some error occurred");
  }
  return context;
};

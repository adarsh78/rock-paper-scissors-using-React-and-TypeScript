import { useAppcontext } from "../Context/AppContextProvider"

const Score = () => {

  const { score } = useAppcontext();
  return (
    <>
    <div className="flex border-3 border-[hsl(217,16%,45%)] p-[1rem] justify-between items-center min-w-[20rem] rounded-md md:gap-[15rem]">
      <img src="./images/logo.svg" alt="logo" width="80px" />
      <div className="leading-none flex flex-col items-center bg-white py-[10px] px-[20px] rounded-md">
        <span className="text-xs text-[hsl(229,64%,46%)]">SCORE</span>
        <span className="font-bold text-[hsl(229,25%,31%)] text-[2rem]">{score}</span>
      </div>
    </div>
    </>
  )
}

export default Score
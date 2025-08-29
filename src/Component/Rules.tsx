interface RulesProps {
  rulesOpen: boolean;
  setIsRulesOpen: (open: boolean) => void;
}

console.log("A Console");

const Rules = ({ rulesOpen, setIsRulesOpen }: RulesProps) => {
  return (
    <>
      {rulesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/40 transition-opacity duration-300 ease-in-out">
          <div className="flex flex-col items-center pt-[5rem] md:pt-0 gap-[5rem] md:gap-5 bg-white h-screen w-screen md:h-[400px] md:w-[400px] md:pt-2 md:rounded-xl transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fadeIn">
            <p className="text-gray-600 text-2xl font-bold">RULES</p>
            <img
              src="./images/image-rules.svg"
              alt="image-rules"
              className="mb-4 max-w-full h-auto"
            />
            <img
              src="./images/icon-close.svg"
              onClick={() => setIsRulesOpen(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;

interface RulesProps {
  rulesOpen: boolean;
  setIsRulesOpen: (open: boolean) => void;
}
const Rules = ({ rulesOpen, setIsRulesOpen }: RulesProps) => {
  return (
    <>
      {rulesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-[10rem] transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fadeIn">
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

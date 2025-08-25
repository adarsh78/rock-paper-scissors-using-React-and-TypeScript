interface RulesProps {
  rulesOpen: boolean;
  setIsRulesOpen: (open: boolean) => void;
}
const Rules = ({ rulesOpen, setIsRulesOpen }: RulesProps) => {
  return (
    <>
      {rulesOpen && (
        <div>
          <button onClick={() => setIsRulesOpen(false)}>Close</button>
          <div>Rules</div>
          <div>Rules</div>
          <div>Rules</div>
          <div>Rules</div>
          <div>Rules</div>
          <div>Rules</div>
          <div>Rules</div>
          <div>Rules</div>
        </div>
      )}
    </>
  );
};

export default Rules;

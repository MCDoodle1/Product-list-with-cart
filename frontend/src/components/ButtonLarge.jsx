const ButtonLarge = ({ text, confirm }) => {
  return (
    <button className="button-large" onClick={confirm}>
      {text}
    </button>
  );
};
export default ButtonLarge;

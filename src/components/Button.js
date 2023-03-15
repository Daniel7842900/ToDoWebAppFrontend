const Button = (props) => {
  const { type, className, text, handleOnClick } = props;

  return (
    <button type={type} className={className} onClick={handleOnClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;

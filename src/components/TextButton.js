const TextButton = (props) => {
  const { type, className, text, handleOnClick, handleOnSubmit } = props;

  return (
    <button
      type={type}
      className={className}
      onClick={handleOnClick}
      onSubmit={handleOnSubmit}
    >
      <span>{text}</span>
    </button>
  );
};

export default TextButton;

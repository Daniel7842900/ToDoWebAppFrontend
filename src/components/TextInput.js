const TextInput = (props) => {
  const {
    containerClassName,
    inputClassName,
    type,
    name,
    placeholder,
    autoComplete,
    handleOnChange,
  } = props;

  return (
    <div className={containerClassName}>
      <input
        type={type}
        name={name}
        className={inputClassName}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TextInput;

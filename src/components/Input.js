const Input = (props) => {
  const {
    containerClassName,
    inputClassName,
    id,
    type,
    name,
    value,
    placeholder,
    autoComplete,
    handleOnChange,
    readOnly,
  } = props;

  return (
    <div className={containerClassName}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className={inputClassName}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleOnChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;

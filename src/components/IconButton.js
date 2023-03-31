import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = (props) => {
  const { containerClassName, iconClassName, icon, handleOnClick } = props;

  return (
    <button className={containerClassName} onClick={handleOnClick}>
      <FontAwesomeIcon icon={icon} className={iconClassName} />
    </button>
  );
};

export default IconButton;

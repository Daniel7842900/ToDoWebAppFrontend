import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = (props) => {
  const { containerClassName, iconClassName, icon, handleOnClick } = props;

  return (
    <div className={containerClassName}>
      <FontAwesomeIcon
        icon={icon}
        className={iconClassName}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default IconButton;

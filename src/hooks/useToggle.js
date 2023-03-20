import { useState } from "react";

const useToggle = (initialValue) => {
  console.log("toggled");
  const [toggleValue, setToggleValue] = useState(initialValue);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  return [toggleValue, toggler];
};

export default useToggle;

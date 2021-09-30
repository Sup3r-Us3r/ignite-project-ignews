import { useEffect, useState } from "react";

export const Async = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [isButtonInvisible, setIsButtonInvisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
      setIsButtonInvisible(true);
    }, 3000);
  }, []);

  return (
    <div>
      Hello World
      { isButtonVisible && <button>Button</button> }
      { !isButtonInvisible && <button>Button Invisible</button> }
    </div>
  );
}

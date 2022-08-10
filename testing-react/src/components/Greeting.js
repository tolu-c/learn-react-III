import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {changedText ? <p>Changed!</p> : <p>It's good to see you!</p>}
      <button onClick={changeTextHandler}>change text</button>
    </div>
  );
};

export default Greeting;

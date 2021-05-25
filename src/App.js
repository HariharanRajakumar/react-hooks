import React, { useEffect, useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h1>size:{size}</h1>
    </div>
  );
};

export default App;

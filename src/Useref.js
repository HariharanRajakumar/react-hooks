import React, { useEffect, useRef } from "react";
// preserves value
// does not trigger re-render
// target DOM nodes/elements

function Useref() {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}

export default Useref;

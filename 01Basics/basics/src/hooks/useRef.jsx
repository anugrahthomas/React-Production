import React, { useRef } from "react";

const Reference = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Reference;

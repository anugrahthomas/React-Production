import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import Portal from "./portal";

const CopyText = () => {
  const [text, setText] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 5000);
  };
  return (
    <div style={{ display: "flex", color: "white", alignItems: "center" }}>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={copyHandler}>
        <FaCopy />
      </button>

      <Portal isCopy={isCopy} />
    </div>
  );
};

export default CopyText;

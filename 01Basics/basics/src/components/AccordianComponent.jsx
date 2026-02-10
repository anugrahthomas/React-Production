import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordianComponent = ({ id, title, content }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      style={{ border: "2px solid white", width: "50%", marginBottom: "10px" }}
      key={id}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#b2b2b2",
          color: "black",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <h2>{title}</h2>
        <p>
          {!active ? (
            <FaPlus
              style={{ cursor: "pointer" }}
              size={20}
              onClick={() => {
                setActive(!active);
              }}
            />
          ) : (
            <FaMinus
              style={{ cursor: "pointer" }}
              size={20}
              onClick={() => {
                setActive(!active);
              }}
            />
          )}
        </p>
      </div>
      {active && <p style={{ padding: "0 10px" }}>{content}</p>}
    </div>
  );
};

export default AccordianComponent;

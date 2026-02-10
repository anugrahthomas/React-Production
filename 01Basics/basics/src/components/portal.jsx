import { createPortal } from "react-dom";
const Portal = ({isCopy}) => {
  return createPortal(
    <section>
      {isCopy && (
        <div
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            border: "2px solid white",
            padding: "4px",
          }}
        >
          Copy To Clipboard
        </div>
      )}
    </section>, document.querySelector("#portal-el")
  );
};

export default Portal;

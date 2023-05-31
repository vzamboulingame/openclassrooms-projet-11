import { useState } from "react";
import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";

/**
 * Collapse component.
 *
 * @param {object} props - Component props.
 * @param {string} props.title - Title of the collapse.
 * @param {React.ReactNode} props.children - Child components to be rendered when the collapse is open.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the collapse state between open and closed
  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`collapse`} onClick={toggleCollapse}>
      <div className="collapse-title">
        {props.title}
        {isOpen ? (
          <img src={arrowUp} alt="Arrow Up" className="collapse-arrow" />
        ) : (
          <img src={arrowDown} alt="Arrow Down" className="collapse-arrow" />
        )}
      </div>
      {isOpen && <div className="collapse-text">{props.children}</div>}
    </div>
  );
}

import { useState } from "react";
import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

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

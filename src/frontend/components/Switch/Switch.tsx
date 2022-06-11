import React, { ChangeEvent } from "react";
import "./switch.css";

interface SwitchProps {
  id: string;
  handleChange: (e: ChangeEvent) => void;
  isOn: boolean;
}

const Switch = ({ id, handleChange, isOn }: SwitchProps) => {
  return (
    <>
      <input
        data-cy="review-switch-checkbox"
        className="switch--checkbox"
        id={id}
        checked={isOn}
        type="checkbox"
        onChange={handleChange}
      />
      <label
        data-cy="review-switch"
        className="switch--label"
        htmlFor={id}
      >
        <span className={`switch--button`} />
      </label>
    </>
  );
};

export { Switch };

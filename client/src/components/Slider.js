import React from 'react';

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div className="Slider">
      <label>{label}</label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;

import React from "react";
import { DropdownProps } from "../types";

const FilterDropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border border-gray-300 rounded-lg shadow-lg h-[2.3rem] w-full md:w-[10rem] text-sm"
    >
      {options.map((option) => (
        <option
          key={option.value}
          disabled={option.disabled}
          hidden={option.hidden}
          selected={option.selected}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;

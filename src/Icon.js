import React from "react";
import { FaTimes, FaCircle, FaPen } from "react-icons/fa";

export default function Icon({ name }) {
  return (
    <div>
      {name === "empty" ? (
        <FaPen />
      ) : name === "circle" ? (
        <FaCircle />
      ) : (
        <FaTimes />
      )}
    </div>
  );
}

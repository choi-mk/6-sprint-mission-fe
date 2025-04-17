"use client";

import React, { useEffect, useRef, useState } from "react";

function useOutsideClick(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        console.log("dlsjf");
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return { isOpen, setIsOpen, dropDownRef };
}

export default useOutsideClick;

import React, { useEffect, useRef } from "react";
// import styles from "./style.scss";

const CustomCursor = () => {
  const cursorRef = useRef(null) as any;

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientWidth / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return <div className="app-cursor" ref={cursorRef} />;
};

export default CustomCursor;

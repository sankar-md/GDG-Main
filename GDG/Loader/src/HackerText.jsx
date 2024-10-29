import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const HackerText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i < text.length; i++) {
        for (let j = 97; j <= text.charCodeAt(i); j++) {
          setDisplayText(
            (prev) =>
              prev.slice(0, i) + String.fromCharCode(j) + prev.slice(i + 1)
          );
          await new Promise((resolve) => setTimeout(resolve, 40));
        }
      }
    };

    animateText();
  }, [text]);

  return <span>{displayText}</span>;
};

export default HackerText;

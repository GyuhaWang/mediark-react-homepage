import React, { useState, useEffect } from "react";

export function TypingText({ text, delay }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length - 1) clearInterval(intervalId);
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay, text]);

  return <h1 class="text-white font-weight-bold">{displayedText}</h1>;
}

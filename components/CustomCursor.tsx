"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      setActive(Boolean(element.closest("a,button")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  const size = active ? 40 : 8;
  const offset = size / 2;

  return (
    <motion.div
      animate={{
        width: size,
        height: size,
      }}
      transition={{ duration: 0.1, ease: "linear" }}
      className="pointer-events-none fixed z-[70] hidden rounded-full border border-[#C6A56B] md:block"
      style={{
        left: position.x - offset,
        top: position.y - offset,
        backgroundColor: active ? "transparent" : "#C6A56B",
      }}
    />
  );
}

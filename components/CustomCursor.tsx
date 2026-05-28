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

  return (
    <motion.div
      animate={{
        x: position.x - (active ? 20 : 4),
        y: position.y - (active ? 20 : 4),
        width: active ? 40 : 8,
        height: active ? 40 : 8,
      }}
      transition={{ duration: 0.1, ease: "linear" }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border border-[#C6A56B] bg-[#C6A56B] md:block"
      style={{ backgroundColor: active ? "transparent" : "#C6A56B" }}
    />
  );
}

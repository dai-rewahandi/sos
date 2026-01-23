"use client";

import { AnimatePresence, motion } from "motion/react";

type BtnWhiteStyleProps = {
  children: React.ReactNode;
  label?: "menu" | "child";
  show?: boolean;
  onClick?: () => void;
  offset?: { x: number; y: number };
  styled?: React.CSSProperties;
  active?: boolean;
  linkName?: string;
};

function BtnWhiteStyle({
  children,
  label,
  styled,
  show = true,
  onClick,
  offset = { x: 0, y: 0 },
  active = false,
}: BtnWhiteStyleProps) {
  return (
    <AnimatePresence>
      {(label !== "child" || show) && (
        <motion.div
          whileHover={{
            scale: 1.3,
            zIndex: 100,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            type: "spring",
            damping: 8,
            stiffness: 200,
          }}
          initial={{
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: active ? 0.8 : 1,
            opacity: 1,
            x: offset.x,
            y: offset.y,
          }}
          exit={{
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
          }}
          style={styled}
          onClick={onClick}
          className="bg-white dark:bg-gray-700 min-w-10 h-10 rounded-full shadow-md p-2 flex items-center justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BtnWhiteStyle;

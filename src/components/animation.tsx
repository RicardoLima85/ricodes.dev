import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

type Props = {
  direction: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  once?: boolean;
  margin?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

export function Animation({
  direction,
  children,
  delay = 0.3,
  duration = 0.4,
  margin = "-64px",
  once = false,
  className,
}: Props) {
  const directionMap = {
    up: { y: -50 },
    down: { y: 50 },
    left: { x: -50 },
    right: { x: 50 },
  };

  const viewDirection = {
    up: { y: 0 },
    down: { y: 0 },
    left: { x: 0 },
    right: { x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{
        opacity: 1,
        ...viewDirection[direction],
        transition: { duration, delay },
      }}
      viewport={{ once, margin }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

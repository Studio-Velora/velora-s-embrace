import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

type Props = {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
};

function wrap(value: number, width: number) {
  if (width <= 0) return value;
  const v = value % width;
  return v > 0 ? v - width : v;
}

export function Marquee({
  items,
  duration = 40,
  reverse = false,
  className,
  itemClassName,
}: Props) {
  const doubled = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const x = useMotionValue(0);
  const hovering = useRef(false);
  const dragging = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setSetWidth(el.scrollWidth / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  useAnimationFrame((_, delta) => {
    if (hovering.current || dragging.current || !setWidth) return;
    const speed = setWidth / duration;
    const direction = reverse ? 1 : -1;
    x.set(wrap(x.get() + direction * speed * (delta / 1000), setWidth));
  });

  return (
    <div
      style={{ overflow: "hidden" }}
      className={`relative ${className ?? ""}`}
      onMouseEnter={() => {
        hovering.current = true;
      }}
      onMouseLeave={() => {
        hovering.current = false;
      }}
    >
      <motion.div
        ref={trackRef}
        drag="x"
        dragMomentum={false}
        onDragStart={() => {
          dragging.current = true;
        }}
        onDragEnd={() => {
          dragging.current = false;
          if (setWidth) x.set(wrap(x.get(), setWidth));
        }}
        style={{ x, touchAction: "pan-y" }}
        className="flex w-max cursor-grab gap-12 active:cursor-grabbing"
      >
        {doubled.map((it, i) => (
          <div key={i} className={`shrink-0 ${itemClassName ?? ""}`}>
            {it}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

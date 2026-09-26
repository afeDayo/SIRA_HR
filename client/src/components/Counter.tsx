import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

type Props = {
  value: string;
  className?: string;
};

const DURATION_MS = 1100;

export default function Counter({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const isNumber = /^\d+$/.test(value.trim());
  const target = isNumber ? Number(value) : 0;
  const [display, setDisplay] = useState(isNumber ? "0" : value);

  useEffect(() => {
    if (!isNumber || !inView) return;

    let frame = 0;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(target * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumber, target]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

import { useEffect, useRef } from "react";
import { getLenis } from "../lib/lenis";

export function useScrollVelocity(onChange: (velocity: number) => void) {
  const cbRef = useRef(onChange);
  cbRef.current = onChange;

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    const handler = (e: { velocity: number }) => {
      const clamped = Math.max(-2.5, Math.min(2.5, e.velocity));
      cbRef.current(clamped / 2.5);
    };

    lenis.on("scroll", handler);
    return () => {
      lenis.off("scroll", handler);
    };
  }, []);
}

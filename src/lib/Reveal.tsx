import { useEffect, useRef, useState, type ReactNode } from "react";

/** Props for the scroll-triggered reveal wrapper. */
interface Props {
  /** React content to reveal when the wrapper enters the viewport. */
  children: ReactNode;
  /** Delay before the reveal transition, in milliseconds. */
  delay?: number;
  /** Optional classes appended to the wrapper. */
  className?: string;
}

/**
 * Fades and lifts its children into view the first time they scroll on screen.
 * If IntersectionObserver is unavailable, the content is shown immediately.
 */
export default function Reveal({ children, delay = 0, className = "" }: Props) {
  /** Element observed to detect when this wrapper enters the viewport. */
  const ref = useRef<HTMLDivElement>(null);
  /** Whether the wrapper has entered the viewport and should be visible. */
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Keep content visible on browsers without IntersectionObserver support.
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    // Reveal once at least 12% of the wrapper is visible, then stop observing it.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    // Disconnect on unmount to release the observer.
    return () => io.disconnect();
  }, []);

  // The delay staggers transitions; visibility classes control the fade and lift.
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

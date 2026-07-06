/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

/**
 * Reveal
 * Wrapper que aplica fade+translate al entrar en el viewport (IntersectionObserver).
 * Respeta prefers-reduced-motion: si el usuario lo pide, el contenido se muestra sin animar.
 *
 * Props:
 *  - delay: tiempo de espera (ms) para efecto stagger
 *  - as: tag del contenedor (default 'div')
 *  - threshold: visibilidad necesaria para disparar (default 0.15)
 */
export const Reveal = ({ children, delay = 0, as = "div", threshold = 0.15, sx, ...rest }) => {
  const ref = useRef(null);
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return (
    <Box
      ref={ref}
      component={as}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: "opacity, transform",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
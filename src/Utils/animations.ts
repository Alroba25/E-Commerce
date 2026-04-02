// Utility file containing global animation variants for Framer Motion

// Page Transitions (Fade in + Slide Up)
export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }, // Smooth easing
};

// Container Stagger (For lists or grids)
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

// Individual item fade-in up (for use inside staggerContainer)
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Card Hover Effects
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow:
      "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    scale: 1.03, // Max scale requested by user
    boxShadow:
      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Specific subtle button interactions
export const buttonInteraction = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95, // Shrink slightly on click
    transition: { duration: 0.1 },
  },
};

// Modal pop-in and fade
export const modalAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }, // Custom spring-like easing without bounce
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

// Backdrop fade (used behind Modals)
export const backdropFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Form interactions
export const errorPopIn = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

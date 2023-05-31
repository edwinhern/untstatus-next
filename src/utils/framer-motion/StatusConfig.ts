const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  inital: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const fadeInDown = {
  inital: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

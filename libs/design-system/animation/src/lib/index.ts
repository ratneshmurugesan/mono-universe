import { motion } from '@mono-universe/design-system/shared/design-tokens';

/* 
  @keyframes name {
    0% to 100% or from to
  }
  animation: [name] [duration] [ease-timing-value] [delay] [iteration-count] [direction]  [fill-mode]
*/
const animationTokens = {
  'slow-appears': motion['duration-slow-01'],
  'modal-appears': motion['duration-medium-02'],
  'card-active': motion['duration-medium-01'],
  'button-hover': motion['duration-fast-02'],
};

/* 
  transition: [property] [duration] [ease-timing-value] [delay]
  assign to transform property only.
*/
const transitionTokens = {
  rotate90: `rotate(90deg) ${motion['duration-fast-02']} ${motion['ease-in']} ${motion['duration-fast-02']}`,
  scale2x: `scale(2, 2) ${motion['duration-fast-02']} ${motion['ease-standard-productive']} ${motion['duration-fast-02']}`,
};

export { animationTokens, transitionTokens };

import { keyframes } from '@emotion/react';

export const pulsating = keyframes`
  0% {
    opacity: 1;
    text-shadow: 
        0 0 10px rgba(129, 140, 248, .7),
        0 0 40px rgba(129, 140, 248, .7),
        0 0 100px rgba(129, 140, 248, .7);
  }
  50% { 
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    text-shadow:
        0 0 5px rgba(129, 140, 248, .7),
        0 0 20px rgba(129, 140, 248, .7),
        0 0 60px rgba(129, 140, 248, .7);
  }
`;

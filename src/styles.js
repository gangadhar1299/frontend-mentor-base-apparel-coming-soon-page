export const colors = {
  desaturatedRed: "hsl(0, 93%, 68%)",
  softRed: "hsl(0, 36%, 70%)",
  darkGrayishRed: "hsl(0, 6%, 24%)",
};

export const gradients = {
  gradient1: "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
  gradient2: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
};

export const scaleValue = (value = 16, idealViewportWidth = 1600) => {
  return value * (window.innerWidth / idealViewportWidth);
};

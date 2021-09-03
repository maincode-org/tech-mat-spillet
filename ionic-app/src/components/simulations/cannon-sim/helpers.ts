export const drawOnCanvas = (context: CanvasRenderingContext2D | undefined): void => {
  if (!context) return;

  context.font = '20px Roboto';
  context.fillStyle = '#000000';

  // y-axis
  context.moveTo(0, 0);
  context.lineTo(0, context.canvas.height);
  context.stroke();
  context.fillText('Y', 20, 20);

  // x-axis
  context.moveTo(0, context.canvas.height);
  context.lineTo(context.canvas.width, context.canvas.height);
  context.stroke();
  context.fillText('X', context.canvas.width - 10, context.canvas.height - 10);

  // Trajectory
  context.fillStyle = '#1d8ba5';
  context.moveTo(0.5, context.canvas.height + 0.5);
  context.quadraticCurveTo(150.5, 20.5, context.canvas.width + 0.5, context.canvas.height + 0.5);
  context.stroke();
};

export const applyCannonStyle = (cannon: SVGSVGElement) => {
  cannon.style.height = '15%';
  cannon.style.width = '15%';
  cannon.style.left = '2%';
  cannon.style.bottom = '2%';
  cannon.style.position = 'absolute';
};

export const createHiPPICanvas = (w: number, h: number) => {
  const ratio = window.devicePixelRatio;
  const cv = document.createElement('canvas');
  cv.width = w * ratio;
  cv.height = h * ratio;
  cv.style.width = w + 'px';
  cv.style.height = h + 'px';
  cv.getContext('2d')?.scale(ratio, ratio);
  return cv;
};

export const enhanceCanvasQuality = (canvas: HTMLCanvasElement, w: number, h: number): void => {
  const ratio = window.devicePixelRatio;
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.getContext('2d')?.scale(ratio, ratio);
};

// export const calcTrajectoryPath = () => {};

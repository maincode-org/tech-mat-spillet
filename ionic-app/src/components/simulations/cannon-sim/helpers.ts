export const drawOnCanvas = (context: CanvasRenderingContext2D): void => {
  const ratio = window.devicePixelRatio;
  const canvasWidth = context.canvas.width / ratio;
  const canvasHeight = context.canvas.height / ratio;

  context.font = '20px Roboto';
  context.strokeStyle = '#000000';
  context.fillStyle = '#000000';

  // y-axis
  context.moveTo(0, 0);
  context.lineTo(0, canvasHeight);
  context.stroke();
  context.fillText('Y', 20, 20);

  // x-axis
  context.moveTo(0, canvasHeight);
  context.lineTo(canvasWidth, canvasHeight);
  context.stroke();
  context.fillText('X', canvasWidth - 20, canvasHeight - 20);

  // Trajectory
  context.beginPath();
  context.lineWidth = 3;
  context.strokeStyle = 'green';
  context.moveTo(0, canvasHeight);

  calcTrajectoryPath(context, -0.05, 1.88, canvasWidth);
  context.stroke();
};

export const applyCannonStyle = (cannon: SVGSVGElement) => {
  cannon.style.height = '15%';
  cannon.style.width = '15%';
  cannon.style.left = '2%';
  cannon.style.bottom = '2%';
  cannon.style.position = 'absolute';
};

/* Stack-overflow solution
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
 */

export const enhanceCanvasQuality = (canvas: HTMLCanvasElement, simulationSize: number, wPct: number, hPct: number): CanvasRenderingContext2D | null => {
  const ratio = window.devicePixelRatio;
  const wPx = (wPct / 100) * simulationSize + simulationSize * 0.01;
  const hPx = (hPct / 100) * simulationSize + simulationSize * 0.01;
  canvas.width = wPx * ratio;
  canvas.height = hPx * ratio;
  canvas.style.width = wPx + 'px';
  canvas.style.height = hPx + 'px';
  const context = canvas.getContext('2d');
  context?.scale(ratio, ratio);
  return context;
};

// a and c as in a*x²+b*x+c
export const calcTrajectoryPath = (context: CanvasRenderingContext2D, a: number, c: number, maxXValue: number) => {
  for (let x = 0; x < maxXValue; x++) {
    const y = ((a * x) ^ 2) + x + c;
    context.lineTo(x, y);
  }
};

export const drawPlot = (context: CanvasRenderingContext2D): void => {
  const ratio = window.devicePixelRatio;
  const canvasWidth = context.canvas.width / ratio;
  const canvasHeight = context.canvas.height / ratio;

  const fontSize = 20;
  const letterOffset = fontSize / 2 - 3;

  const topOffset = fontSize * 1.25;
  const rightOffset = fontSize * 1.25;
  const axisOffset = fontSize * 1.5; // Space for axis labels and details

  context.font = `${fontSize}px Roboto`;
  context.strokeStyle = '#000000';
  context.fillStyle = '#000000';

  // y-axis
  context.moveTo(axisOffset, topOffset);
  context.lineTo(axisOffset, canvasHeight - axisOffset);
  context.stroke();
  context.fillText('Y', axisOffset - letterOffset, topOffset - letterOffset);

  // x-axis
  context.moveTo(axisOffset, canvasHeight - axisOffset);
  context.lineTo(canvasWidth - rightOffset, canvasHeight - axisOffset);
  context.stroke();
  context.fillText('X', canvasWidth - rightOffset + letterOffset, canvasHeight - axisOffset + letterOffset);

  // Trajectory
  context.beginPath();
  context.lineWidth = 3;
  context.strokeStyle = 'green';
  context.moveTo(0, canvasHeight);

  calcTrajectoryPath(context, -0.05, 1.88, canvasWidth);
  // context.stroke();
};

export const applyCannonStyle = (cannon: SVGSVGElement) => {
  cannon.style.height = '15%';
  cannon.style.width = '15%';
  cannon.style.left = '2%';
  cannon.style.bottom = '2%';
  cannon.style.position = 'absolute';
};

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

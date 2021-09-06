export type IAxisOption = {
  fromValue: number;
  toValue: number;
  label?: string;
  numberOfDashes?: number;
};

export type IAxisOptions = {
  x: IAxisOption;
  y: IAxisOption;
};

export const drawPlot = (context: CanvasRenderingContext2D, axisOptions: IAxisOptions): void => {
  const ratio = window.devicePixelRatio;
  const canvasWidth = context.canvas.width / ratio;
  const canvasHeight = context.canvas.height / ratio;

  // Font settings and helpers
  const fontSize = 20;
  context.font = `${fontSize}px Roboto`;

  const textWidth = (text: string): number => context.measureText(text).width;
  const textHeight = (text: string): number => context.measureText(text).actualBoundingBoxAscent;
  const textPadding = textHeight('1');

  const textWidthCenter = (text: string): number => textWidth(text) / 2;
  const textHeightCenter = (text: string): number => textHeight(text) / 2;

  const pointDashSize = 10;
  const xTotalDashes = axisOptions.x.numberOfDashes ?? 10;
  const yTotalDashes = axisOptions.y.numberOfDashes ?? 10;

  const shouldRoundX = axisOptions.x.toValue - axisOptions.x.fromValue > xTotalDashes;
  const shouldRoundY = axisOptions.y.toValue - axisOptions.y.fromValue > yTotalDashes;
  const yRoundPadding = !shouldRoundY ? textWidth('.4') : 0;

  // Axis settings and helpers
  const offset = {
    top: textHeight('Y') * 2,
    right: textWidthCenter(`${axisOptions.x.toValue}`) > textWidth('X') * 1.25 ? textWidthCenter(`${axisOptions.x.toValue}`) : textWidth('X') * 2,
    bottom: textHeight(`${axisOptions.x.toValue}`) * 2.5,
    left: textWidth(`${axisOptions.y.toValue}`) + textPadding + yRoundPadding,
  };

  const xStepWidth = (canvasWidth - offset.right - offset.left) / xTotalDashes;
  const yStepWidth = (canvasHeight - offset.top - offset.bottom) / yTotalDashes;

  const xStepValue = (axisOptions.x.toValue - axisOptions.x.fromValue) / xTotalDashes;
  const yStepValue = (axisOptions.y.toValue - axisOptions.y.fromValue) / yTotalDashes;

  context.strokeStyle = '#000000';
  context.fillStyle = '#000000';
  context.lineWidth = 2;

  // y-axis
  context.moveTo(offset.left, offset.top);
  context.lineTo(offset.left, canvasHeight - offset.bottom);
  context.fillText('Y', offset.left - textWidthCenter('Y'), offset.top - textHeightCenter('Y'));

  // x-axis
  context.moveTo(offset.left, canvasHeight - offset.bottom);
  context.lineTo(canvasWidth - offset.right, canvasHeight - offset.bottom);
  context.fillText('X', canvasWidth - offset.right + textWidthCenter('X'), canvasHeight - offset.bottom + textHeightCenter('X'));

  // Draw x-axis details and ranges
  for (let i = 0; i <= xTotalDashes; i++) {
    const xAxisPoint = offset.left + xStepWidth * i;

    if (i !== 0) {
      context.moveTo(xAxisPoint, canvasHeight - offset.bottom + pointDashSize / 2);
      context.lineTo(xAxisPoint, canvasHeight - offset.bottom - pointDashSize / 2);
    }

    const stepTextNumber = axisOptions.x.fromValue + i * xStepValue;
    const stepText = `${shouldRoundX ? Math.round(stepTextNumber) : stepTextNumber.toFixed(1)}`;
    context.fillText(stepText, xAxisPoint - textWidthCenter(stepText), canvasHeight - textHeightCenter(stepText));
  }

  // Draw y-axis details and ranges
  context.textAlign = 'right';
  for (let i = 0; i <= yTotalDashes; i++) {
    const yAxisPoint = canvasHeight - offset.bottom - yStepWidth * i;

    if (i !== 0) {
      context.moveTo(offset.left + pointDashSize / 2, yAxisPoint);
      context.lineTo(offset.left - pointDashSize / 2, yAxisPoint);
    }

    const stepTextNumber = axisOptions.y.fromValue + i * yStepValue;
    const stepText = `${shouldRoundY ? Math.round(stepTextNumber) : stepTextNumber.toFixed(1)}`;
    context.fillText(stepText, offset.left - pointDashSize / 2 - textPadding / 2, yAxisPoint + textHeightCenter(stepText));
  }

  context.textAlign = 'left';
  context.stroke(); // Draws the axis' with numbers and details

  // Trajectory
  context.beginPath();
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

import { drawPoint } from 'chart.js/helpers';

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

export type IPlotConfig = {
  canvasWidth: number;
  canvasHeight: number;
  fontSize: number;
  axis: IAxisOptions;
  offset: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  numberOfDashes: {
    x: number;
    y: number;
  };
  stepWidth: {
    x: number;
    y: number;
  };
  stepValue: {
    x: number;
    y: number;
  };
};

export const drawPlot = (context: CanvasRenderingContext2D, axisOptions: IAxisOptions): IPlotConfig => {
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
  const xNumberOfDashes = axisOptions.x.numberOfDashes ?? 10;
  const yNumberOfDashes = axisOptions.y.numberOfDashes ?? 10;

  // Axis settings and helpers
  const xStepValue = (axisOptions.x.toValue - axisOptions.x.fromValue) / xNumberOfDashes;
  const yStepValue = (axisOptions.y.toValue - axisOptions.y.fromValue) / yNumberOfDashes;

  const shouldRoundX = shouldRoundAxisValues(xNumberOfDashes, axisOptions.x.fromValue, xStepValue);
  const shouldRoundY = shouldRoundAxisValues(yNumberOfDashes, axisOptions.y.fromValue, yStepValue);
  const yRoundPadding = !shouldRoundY ? textWidth('.4') : 0;

  const offset = {
    top: textHeight('Y') * 2,
    right: textWidthCenter(`${axisOptions.x.toValue}`) > textWidth('X') * 1.25 ? textWidthCenter(`${axisOptions.x.toValue}`) : textWidth('X') * 2,
    bottom: textHeight(`${axisOptions.x.toValue}`) * 2.5,
    left: textWidth(`${axisOptions.y.toValue}`) + textPadding + yRoundPadding,
  };

  const xStepWidth = (canvasWidth - offset.right - offset.left) / xNumberOfDashes;
  const yStepWidth = (canvasHeight - offset.top - offset.bottom) / yNumberOfDashes;

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
  for (let i = 0; i <= xNumberOfDashes; i++) {
    const xAxisPoint = offset.left + xStepWidth * i;

    if (i !== 0) {
      context.moveTo(xAxisPoint, canvasHeight - offset.bottom + pointDashSize / 2);
      context.lineTo(xAxisPoint, canvasHeight - offset.bottom - pointDashSize / 2);
    }

    const stepDisplayNumber = axisOptions.x.fromValue + i * xStepValue;
    const stepText = `${shouldRoundX ? Math.round(stepDisplayNumber) : stepDisplayNumber.toFixed(1)}`;
    context.fillText(stepText, xAxisPoint - textWidthCenter(stepText), canvasHeight - textHeightCenter(stepText));
  }

  // Draw y-axis details and ranges
  context.textAlign = 'right';
  for (let i = 0; i <= yNumberOfDashes; i++) {
    const yAxisPoint = canvasHeight - offset.bottom - yStepWidth * i;

    if (i !== 0) {
      context.moveTo(offset.left + pointDashSize / 2, yAxisPoint);
      context.lineTo(offset.left - pointDashSize / 2, yAxisPoint);
    }

    const stepDisplayNumber = axisOptions.y.fromValue + i * yStepValue;
    const stepText = `${shouldRoundY ? Math.round(stepDisplayNumber) : stepDisplayNumber.toFixed(1)}`;
    context.fillText(stepText, offset.left - pointDashSize / 2 - textPadding / 2, yAxisPoint + textHeightCenter(stepText));
  }

  context.textAlign = 'left';
  context.stroke(); // Draws the axis' with numbers and details

  return {
    canvasWidth,
    canvasHeight,
    fontSize,
    offset,
    axis: axisOptions,
    numberOfDashes: { x: xNumberOfDashes, y: yNumberOfDashes },
    stepWidth: { x: xStepWidth, y: yStepWidth },
    stepValue: { x: xStepValue, y: yStepValue },
  };
};

const shouldRoundAxisValues = (numberOfDashes: number, fromValue: number, stepValue: number): boolean => {
  const values = Array.from(Array(numberOfDashes).keys()).map((i) => fromValue + i * stepValue);
  return values.every((num) => num % 1 === 0);
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

export type ICoord = {
  x: number;
  y: number;
};

export type IPoint = ICoord & { isInPlotView: boolean };

export const coordToPoint = (coord: ICoord, plot: IPlotConfig): IPoint => {
  const { axis, stepValue, stepWidth, offset, canvasHeight } = plot;

  /** The reciprocal (1/..) indicates the number of steps between a full value. Eg. step value 0.5 => 2 steps between each value. */
  const xSteps = coord.x * stepWidth.x * (1 / stepValue.x);
  const xFromOffset = axis.x.fromValue * (1 / stepValue.x) * stepWidth.x;
  const x = offset.left + xSteps - xFromOffset;

  const ySteps = coord.y * stepWidth.y * (1 / stepValue.y);
  const yFromOffset = axis.y.fromValue * (1 / stepValue.y) * stepWidth.y;
  const y = canvasHeight - (offset.bottom + ySteps) + yFromOffset;

  const isInPlotView = coord.x >= axis.x.fromValue && coord.x <= axis.x.toValue && coord.y >= axis.y.fromValue && coord.y <= axis.y.toValue;

  return { x, y, isInPlotView };
};

export const drawPlotPoint = (plot: IPlotConfig, coord: ICoord, context: CanvasRenderingContext2D): void => {
  const point = coordToPoint(coord, plot);
  if (!point.isInPlotView) return;

  context.beginPath();
  context.arc(point.x, point.y, 2, 0, 2 * Math.PI);
  context.fill();
};

export const drawPlotPoints = (plot: IPlotConfig, coords: ICoord[], context: CanvasRenderingContext2D): void => coords.forEach((c) => drawPlotPoint(plot, c, context));

export const translateYPoint = (plot: IPlotConfig, y: number): number => {
  return plot.canvasHeight - (plot.offset.bottom + y);
};

export const drawFunction = (plot: IPlotConfig, fn: (x: number) => number, context: CanvasRenderingContext2D, color?: string): void => {
  context.beginPath();
  const yOffset = fn(0) * plot.stepWidth.y;

  context.moveTo(plot.offset.left, translateYPoint(plot, fn(plot.offset.left)) - yOffset);

  console.log(plot.offset.left, translateYPoint(plot, fn(plot.offset.left)));

  console.log(coordToPoint({ x: 0, y: 3 }, plot));

  for (let x = 0; x <= plot.canvasWidth - (plot.offset.left + plot.offset.right); x++) {
    context.lineTo(x + plot.offset.left, translateYPoint(plot, fn(x)) - yOffset + fn(0));
    console.log(x, translateYPoint(plot, fn(x)));
  }

  context.strokeStyle = color ?? 'rgba(9,67,131,0.5)';
  context.stroke();
};

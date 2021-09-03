export const drawOnCanvas = (context: CanvasRenderingContext2D | undefined): void => {
  if (!context) return;

  context.font = '10px Roboto';
  context.fillStyle = '#000000';

  // y-axis
  context.moveTo(0, 0);
  context.lineTo(0, context.canvas.height);
  context.stroke();
  context.fillText('Y', 10, 10);

  // x-axis
  context.moveTo(0, context.canvas.height);
  context.lineTo(context.canvas.width, context.canvas.height);
  context.stroke();
  context.fillText('X', context.canvas.width - 10, context.canvas.height - 10);

  // Trajectory
  context.fillStyle = '#1d8ba5';
  context.moveTo(0, context.canvas.height);
  context.quadraticCurveTo(150, 20, context.canvas.width, context.canvas.height);
  context.stroke();
};

export const applyCannonStyle = (cannon: SVGSVGElement) => {
  cannon.style.height = '15%';
  cannon.style.width = '15%';
  cannon.style.left = '2%';
  cannon.style.bottom = '2%';
  cannon.style.position = 'absolute';
};

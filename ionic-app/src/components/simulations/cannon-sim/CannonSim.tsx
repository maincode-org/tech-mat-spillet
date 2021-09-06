import './cannon-sim.css';
import drawing from './Drawing';
import { useEffect, useRef, useState } from 'react';
import { Animation } from '@ionic/react';
import { createAnimation } from '@ionic/core';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { applyCannonStyle, drawFunction, drawPlot, drawPlotPoints, enhanceCanvasQuality, IAxisOptions, IPlotConfig } from './helpers';

type IProps = {
  id: string;
  className?: string;
};

const CannonSim: React.FC<IProps> = ({ id, className }) => {
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const resizeObserver = new ResizeObserver(() => setHasPaintedSection(true));
    resizeObserver.observe(sectionRef.current);
  }, [sectionRef]);

  useEffect(() => {
    if (!hasPaintedSection) return;

    const cannon: SVGSVGElement = sectionRef.current?.querySelector('svg') as SVGSVGElement;
    const cannonBody: HTMLElement = sectionRef.current?.querySelector('#body') as HTMLElement;
    if (!cannonBody) return;

    applyCannonStyle(cannon);

    const animation: Animation = createAnimation().addElement(cannonBody).duration(2000).fromTo('transform', 'rotateZ(0deg)', 'rotateZ(45deg)');
    animation.play();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = enhanceCanvasQuality(canvas, sectionRef.current?.clientWidth ?? 0, 80, 80);

    const axisOptions: IAxisOptions = {
      x: {
        fromValue: 5,
        toValue: 10,
      },
      y: {
        fromValue: 5,
        toValue: 10,
      },
    };
    if (context) {
      const plot: IPlotConfig = drawPlot(context, axisOptions);

      drawPlotPoints(
        plot,
        [
          { x: 1, y: 1 },
          { x: 4.8, y: 4.8 },
          { x: 6, y: 6 },
          { x: 8, y: 8 },
        ],
        context
      );

      const linearFunction = (a: number, b: number) => (x: number) => a * x + b;

      const parabelFunction = (a: number, b: number, c: number) => (x: number) => a * x * x + b * x + c;

      const myStaleFunction = linearFunction(3, 1);
      const myFlatFunction = linearFunction(0.5, 1);
      const myDownwardsFunction = linearFunction(-1, 5);

      drawFunction(plot, myFlatFunction, context);
    }
  }, [hasPaintedSection]);

  return (
    <SimulationContainer id={id} ref={sectionRef}>
      <>
        {drawing}
        <canvas className="canvas" ref={canvasRef} />
      </>
    </SimulationContainer>
  );
};
export default CannonSim;

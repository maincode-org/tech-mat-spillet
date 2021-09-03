import './cannon-sim.css';
import drawing from './Drawing';
import { useEffect, useRef } from 'react';
import { Animation } from '@ionic/react';
import { createAnimation } from '@ionic/core';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { applyCannonStyle, drawOnCanvas } from './helpers';

type IProps = {
  id: string;
  className?: string;
};

const CannonSim: React.FC<IProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cannon: SVGSVGElement = sectionRef.current?.querySelector('svg') as SVGSVGElement;
    const cannonBody: HTMLElement = sectionRef.current?.querySelector('#body') as HTMLElement;
    if (!cannonBody) return;

    applyCannonStyle(cannon);

    const animation: Animation = createAnimation().addElement(cannonBody).duration(2000).fromTo('transform', 'rotateZ(0deg)', 'rotateZ(45deg)');
    animation.play();

    drawOnCanvas(canvasRef?.current?.getContext('2d') ?? undefined);
  }, []);

  return (
    <SimulationContainer id={id} ref={sectionRef}>
      <>
        {drawing}
        <div className="chartContainer">
          <canvas className="w-full h-full" ref={canvasRef} />
        </div>
      </>
    </SimulationContainer>
  );
};
export default CannonSim;

import './cannon-sim.css';
import drawing from './Drawing';
import { useEffect, useRef, useState } from 'react';
import { Animation } from '@ionic/react';
import { createAnimation } from '@ionic/core';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { applyCannonStyle, drawOnCanvas, enhanceCanvasQuality } from './helpers';

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

    if (context) drawOnCanvas(context);
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

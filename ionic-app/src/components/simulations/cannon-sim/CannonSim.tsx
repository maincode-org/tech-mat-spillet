import './cannon-sim.css';
import drawing from './Drawing';
import { useEffect, useRef } from 'react';
import { CreateAnimation, Animation } from '@ionic/react';
import { createAnimation } from '@ionic/core';
import SimulationContainer from '../../simulation-container/SimulationContainer';

type IProps = {
  id: string;
  className?: string;
};

const CannonSim: React.FC<IProps> = ({ id, className }) => {
  const canvasRef = useRef<HTMLElement>(null);
  const animationRef = useRef<CreateAnimation>(null);

  useEffect(() => {
    const cannon: SVGSVGElement = canvasRef.current?.querySelector('svg') as SVGSVGElement;
    const cannonBody: HTMLElement = canvasRef.current?.querySelector('#body') as HTMLElement;
    if (!cannonBody) return;

    console.log(cannon);

    cannon.style.height = '10%';
    cannon.style.width = '10%';
    cannon.style.backgroundColor = 'blue';
    cannon.style.left = '5%';
    cannon.style.bottom = '5%';
    cannon.style.position = 'absolute';
    const animation: Animation = createAnimation().addElement(cannonBody).duration(2000).fromTo('transform', 'rotateZ(0deg)', 'rotateZ(45deg)');
    animation.play();
  }, []);

  useEffect(() => {
    animationRef.current?.animation.play();
  }, []);

  return (
    <SimulationContainer id={id} ref={canvasRef}>
      {drawing}
    </SimulationContainer>
  );
};
export default CannonSim;

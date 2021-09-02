import './cannon-sim.css';
import drawing from './Drawing';
import { useEffect, useRef } from 'react';

type IProps = {
  className?: string;
};

const CannonSim: React.FC<IProps> = ({ className }) => {
  const drawingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atomP: HTMLElement = drawingsRef.current?.querySelector('#AtomP') as HTMLElement;
    if (!atomP) return;

    atomP.style.stroke = 'green';
  });

  return (
    <div className={`${className ?? ''}`} ref={drawingsRef}>
      <h1> test</h1>
      {drawing}
    </div>
  );
};
export default CannonSim;

import React, { ReactElement } from 'react';

type IProps = {
  id: string;
  className?: string;
  children?: ReactElement;
};

const SimulationContainer = React.forwardRef<HTMLElement, IProps>((props, ref) => {
  return (
    <section id={props.id} ref={ref} className={`${props.className ?? ''} w-full h-full inline-block relative`}>
      {props.children}
    </section>
  );
});
export default SimulationContainer;

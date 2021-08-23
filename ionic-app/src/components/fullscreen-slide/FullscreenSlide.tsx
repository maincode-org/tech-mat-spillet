/** Describe the purpose of the FullscreenSlide component here.*/
import { IonSlide } from '@ionic/react';

type IProps = {
  className?: string;
};

const FullscreenSlide: React.FC<IProps> = ({ className, children }) => {
  return <IonSlide className={className}>{children}</IonSlide>;
};
export default FullscreenSlide;

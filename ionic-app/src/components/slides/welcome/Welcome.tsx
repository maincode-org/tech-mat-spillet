/** Describe the purpose of the Welcome component here.*/
import SwipeIndicator from '../../swipe-indicator/SwipeIndicator';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <h2>Velkommen til</h2>
      <SwipeIndicator className="m-2" />
    </div>
  );
};
export default Welcome;

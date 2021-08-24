import Welcome from '../../components/slides/welcome/Welcome';
import XPlusTen from '../../components/slides/assignments/x-plus-ten/XPlusTen';
import XPlusTenCode from '../../components/slides/assignments/x-plus-ten-code/XPlusTenCode';

type ISlide = {
  title?: string;
  subtitle?: string;
  content: JSX.Element;
};

const slides: ISlide[] = [
  {
    title: 'Velkommen',
    subtitle: '..',
    content: <Welcome />,
  },
  {
    content: <XPlusTen />,
  },
  {
    content: <XPlusTenCode />,
  },
];

export default slides;

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
    title: 'Vi præsenterer',
    subtitle: 'Matematik og programmering som spil',
    content: <Welcome />,
  },
  {
    title: 'opg1',
    subtitle: 'dd',
    content: <XPlusTen />,
  },
  {
    title: 'Kodning af funktionen',
    content: <XPlusTenCode />,
  },
];

export default slides;

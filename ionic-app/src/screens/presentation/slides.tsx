import Welcome from '../../components/slides/welcome/Welcome';

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
];

export default slides;

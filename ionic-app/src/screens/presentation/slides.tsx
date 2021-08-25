import Welcome from '../../components/slides/welcome/Welcome';
import XPlusTen from '../../components/slides/assignments/x-plus-ten/XPlusTen';
import XPlusTenCode from '../../components/slides/assignments/x-plus-ten-code/XPlusTenCode';
import WhoAreWe from '../../components/slides/who-are-we/WhoAreWe';
import ContentPurpose from '../../components/slides/content-purpose/ContentPurpose';
import OurBackground from '../../components/slides/our-background/OurBackground';
import OurFocus from '../../components/slides/our-focus/OurFocus';

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
    title: 'Hvem er vi?',
    subtitle: 'Et nystartet indie udviklingsfirma',
    content: <WhoAreWe />,
  },
  {
    title: 'Vores baggrund',
    content: <OurBackground />,
  },
  {
    title: 'Vores fokus',
    subtitle: 'User Experience - Gamification - Undervisningssituationer',
    content: <OurFocus />,
  },
  {
    title: 'Samspil mellem matematik og programmering',
    subtitle: '\nIkke abstrakt, men praktisk og virkelighedsnært\n\n\nDe lærer på dansk, men koden kan auto-oversættes til Node.js',
    content: <ContentPurpose />,
  },
  {
    title: 'Konstruer en funktion der er ens med den lilla streg',
    content: <XPlusTen />,
  },
  {
    content: <XPlusTenCode />,
  },
];

export default slides;

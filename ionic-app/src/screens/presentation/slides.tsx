import Welcome from '../../components/slides/welcome/Welcome';
import XPlusTen from '../../components/slides/assignments/x-plus-ten/XPlusTen';
import XPlusTenCode from '../../components/slides/assignments/x-plus-ten-code/XPlusTenCode';
import WhoAreWe from '../../components/slides/who-are-we/WhoAreWe';
import ContentPurpose from '../../components/slides/content-purpose/ContentPurpose';
import OurBackground from '../../components/slides/our-background/OurBackground';
import OurFocus from '../../components/slides/our-focus/OurFocus';
import ContentCampaigns from '../../components/slides/content-campaigns/ContentCampaigns';
import InspirationBrilliant from '../../components/slides/inspiration-brilliant/InspirationBrilliant';
import GamificationPurpose from '../../components/slides/gamification-purpose/GamificationPurpose';
import InspirationCodingPirates from '../../components/slides/inspiration-coding-pirates/InspirationCodingPirates';
import ThemeAndStructure from '../../components/slides/theme-and-structure/ThemeAndStructure';
import CharacterDevelopment from '../../components/slides/character-development/CharacterDevelopment';
import MiniGames from '../../components/slides/mini-games/MiniGames';
import ClassRanking from '../../components/slides/class-ranking/ClassRanking';
import TeamingUp from '../../components/slides/teaming-up/TeamingUp';
import Constallations from '../../components/slides/constallations/Constallations';
import ITUImage from '../../assets/ITU.jpg';
import fruitNinja from '../../assets/fruitNinja.jpg';
import codingPirates from '../../assets/coding_pirates.png';
import rpgCharacters from '../../assets/rpg.png';
import leaderBoard from '../../assets/leader-board.jpg';
import campaigns from '../../assets/campaigns.jpg';
import ContactInfo from '../../components/slides/contact-info/ContactInfo';

type ISlide = {
  title?: string;
  subtitle?: string;
  content: JSX.Element;
  backgroundImage?: {
    src: string;
    opacity?: number;
  };
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
    backgroundImage: {
      src: ITUImage,
      opacity: 0.25,
    },
    content: <OurBackground />,
  },
  {
    title: 'Vores fokus',
    backgroundImage: {
      src: ITUImage,
      opacity: 0.25,
    },
    content: <OurFocus />,
  },
  {
    title: 'Idéen: Samspil mellem matematik og programmering',
    subtitle: 'Ikke abstrakt, men praktisk og virkelighedsnært\n\n\n\n\n> De lærer på dansk, men koden kan auto-oversættes til Node.js',
    content: <ContentPurpose className="mt-3" />,
  },
  {
    title: 'Konstruer en funktion',
    subtitle: 'som er ens med den blå streg',
    content: <XPlusTen />,
  },
  {
    title: 'Programmér en funktion',
    subtitle: 'som fortæller hvorvidt koordinatet (x,y) er et gyldigt punkt på grafen f(x)=x+10 fra før',
    content: <XPlusTenCode />,
  },
  {
    title: 'Inspireret af Brilliant',
    subtitle: 'Vi måler os selv efter deres kvalitetsniveau',
    content: <InspirationBrilliant />,
  },
  {
    title: 'Den sjove del: Gamification elementer',
    subtitle: 'En underholdende oplevelse der vækker interesse og spænding',
    content: <GamificationPurpose />,
  },
  {
    title: 'Inspireret af Coding Pirates oplevelsen',
    subtitle: 'De har kæmpe succes med at gøre læring spændende for børn',
    backgroundImage: {
      src: codingPirates,
      opacity: 0.6,
    },
    content: <InspirationCodingPirates />,
  },
  {
    title: 'Hvert undervisningsforløb bliver en spilkampagne',
    subtitle: 'Opdelt i pensumemner fra matematik',
    backgroundImage: {
      src: campaigns,
      opacity: 0.7,
    },
    content: <ContentCampaigns />,
  },
  {
    title: 'Temaet er "eventyr" - noget de kender rigtig godt',
    subtitle: 'Klassen har et hold, men eleverne spiller deres egen karakter',
    content: <ThemeAndStructure />,
  },
  {
    title: "Den enkelte karakter's udvikling",
    backgroundImage: {
      src: rpgCharacters,
      opacity: 0.2,
    },
    content: <CharacterDevelopment />,
  },
  {
    title: 'Din klasse dyster i at optjene flest fælles point',
    content: <ClassRanking />,
  },
  {
    title: 'Bibehold lysten og koncentrationen med små MiniGames',
    subtitle: 'Giver eleven en lille pause - ca. 2 min for hver 20 minutters opgaver',
    backgroundImage: {
      src: fruitNinja,
      opacity: 0.4,
    },
    content: <MiniGames />,
  },
  {
    title: 'Vi ønsker en samarbejdspartner',
    subtitle: 'Der kan skabe fagligt indhold til vores framework',
    content: <TeamingUp />,
  },
  {
    title: 'Samarbejdskonstellationer',
    content: <Constallations />,
  },
  {
    title: 'Fang os på',
    content: <ContactInfo />,
  },
];
export default slides;

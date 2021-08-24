import parse from 'html-react-parser';
import styles from './code-highlighter.module.css';

enum EHighlight {
  STATEMENT = 'statement',
  DECLARATION = 'declaration',
  EXPRESSION = 'expression',
  OPERATION = 'operation',
  VALUE = 'value',
  ASSIGNMENT = 'assignment',
}

type IHighlight = {
  keyword: string;
  className: EHighlight;
};

const highlights: IHighlight[] = [
  {
    keyword: 'hvis',
    className: EHighlight.STATEMENT,
  },
  {
    keyword: 'ellers',
    className: EHighlight.STATEMENT,
  },
  {
    keyword: 'funktion',
    className: EHighlight.DECLARATION,
  },
  {
    keyword: 'bliver det',
    className: EHighlight.DECLARATION,
  },
  {
    keyword: 'sandt',
    className: EHighlight.VALUE,
  },
  {
    keyword: 'falsk',
    className: EHighlight.VALUE,
  },
];

const highlight = (s: string): string => {
  const functionNameRegex = new RegExp('(\\sfunktion\\s[a-zA-Z]+)', 'gi');
  const functionNameExecResult = functionNameRegex.exec(s);
  const functionName = functionNameExecResult?.[0].split(' ')[2];
  console.log(functionName);
  if (functionName) {
    s = s.replace(functionName, `<span class="${EHighlight.ASSIGNMENT}">${functionName}</span>`);
  }

  highlights.forEach((h) => (s = s.replace(new RegExp(h.keyword, 'gi'), `<span class="${h.className}">${h.keyword}</span>`)));
  return s;
};

type IProps = {
  code: string;
  className?: string;
};

const CodeHighlighter: React.FC<IProps> = ({ code, className }) => {
  return <pre className={`${className} ${styles.code} m-0 mb-2 text-left`}>{parse(highlight(code))}</pre>;
};
export default CodeHighlighter;

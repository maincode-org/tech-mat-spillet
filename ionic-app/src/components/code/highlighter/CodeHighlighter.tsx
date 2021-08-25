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
    keyword: 'if',
    className: EHighlight.STATEMENT,
  },
  {
    keyword: 'ellers',
    className: EHighlight.STATEMENT,
  },
  {
    keyword: 'else',
    className: EHighlight.STATEMENT,
  },
  {
    keyword: 'funktion',
    className: EHighlight.DECLARATION,
  },
  {
    keyword: 'function',
    className: EHighlight.DECLARATION,
  },
  {
    keyword: 'bliver det',
    className: EHighlight.DECLARATION,
  },
  {
    keyword: 'return',
    className: EHighlight.DECLARATION,
  },
  {
    keyword: 'sandt',
    className: EHighlight.VALUE,
  },
  {
    keyword: 'true',
    className: EHighlight.VALUE,
  },
  {
    keyword: 'falsk',
    className: EHighlight.VALUE,
  },
  {
    keyword: 'false',
    className: EHighlight.VALUE,
  },
];

const highlight = (s: string): string => {
  s = s.replace(/@\(/g, '').replace(/\)@/g, '');

  const functionNameRegex = new RegExp('(\\sfunktion|function\\s[a-zA-Z]+)', 'gi');
  const functionNameExecResult = functionNameRegex.exec(s);
  const functionName = functionNameExecResult?.[0].split(' ')[2];
  if (functionName) s = s.replace(functionName, `<span class="${EHighlight.ASSIGNMENT}">${functionName}</span>`);

  highlights.forEach((h) => (s = s.replace(new RegExp(h.keyword, 'gi'), `<span class="${h.className}">${h.keyword}</span>`)));
  return s;
};

type IProps = {
  code: string;
  className?: string;
};

const CodeHighlighter: React.FC<IProps> = ({ code, className }) => {
  return <pre className={`${className} ${styles.code} m-0 pb-1 text-left`}>{parse(highlight(code))}</pre>;
};
export default CodeHighlighter;

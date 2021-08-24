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
    keyword: 'returner',
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

export const highlight = (s: string): string => {
  highlights.forEach((h) => (s = s.replace(new RegExp(h.keyword, 'gi'), `<span class="${h.className}">${h.keyword}</span>`)));
  return s;
};

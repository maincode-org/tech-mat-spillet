export const evaluateCodeInput = (xValues: number[], userInput: string): number[] => {
  const evaluator = (a: number): number | undefined => {
    try {
      return eval(userInput.replace('x', a.toString()));
    } catch (e) {
      console.log(e);
    }
  };

  if (xValues.some((xVal) => evaluator(xVal) === undefined)) return [];
  return xValues.map((xVal) => evaluator(xVal) as number);
};

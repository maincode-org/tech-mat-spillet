import styles from './x-plus-ten-code.module.css';
import CodeEditor from '../../../code/editor/CodeEditor';

const XPlusTenCode: React.FC = () => {
  const codeSnippetInput = `
  funktion erPunktetGyldigt(x, y) { 
     hvis ( <span class="letter-space">@(______)@</span>) {
        bliver det sandt;
     } ellers {
        bliver det falsk;
     }
  }`;

  return (
    <div className={`${styles.container} p-1 w-full h-full flex flex-col items-center rounded`}>
      <div className={styles.codeEditorContainer}>
        <CodeEditor codeSnippet={codeSnippetInput} options={['x', 'y', '+', '-', '>', '<', '=', '1', '0', '9']} correctAnswer={'y=x+10'} className="mt-3 relative" />
      </div>
    </div>
  );
};
export default XPlusTenCode;

import {ReactNode, useState} from "react";

type IProps = {
    description: ReactNode;
}

const MathAssignment: React.FC<IProps> = ({ description }) => {
    const [answer, setAnswer] = useState('');

    return (
        <div className="container bg-violet">
            <h1>Matematik opgave</h1>
            { description }
            <br/>
            <label>Dit svar</label>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </div>
    );
}
export default MathAssignment;
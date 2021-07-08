import { IonImg } from "@ionic/react";
import { ReactNode } from "react";
import './theory.css';

type IProps = {
    description: ReactNode;
    picture?: string;
}

const Theory: React.FC<IProps> = ({ description, picture}) => {
    return (
        <div className="container bg-violet">
            <h1>Teori</h1>
            { description }
            { picture && <IonImg className="theory-picture" src={picture}/> }
        </div>
    );
}
export default Theory;
import { IonImg } from "@ionic/react";
import './theory.css';

type IProps = {
    title: string;
    description: string;
    picture?: string;
    picturePosition?: unknown;
    interactionID?: string;
}

const Theory: React.FC<IProps> = ({ title, description, picture, picturePosition, interactionID}) => {
    return (
        <div className="container bg-violet">
            <h1>{title}</h1>
            <p className="theory-description">{ description }</p>
            { picture && <IonImg className="theory-picture" src={picture}/> }
        </div>
    );
}
export default Theory;
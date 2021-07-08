import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuToggle, IonToolbar } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import './header.css';

const Header: React.FC = () => {
    return (
        <IonHeader className="menu-fixed">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuToggle>
                        <IonButton>
                            <IonIcon icon={menuOutline}/>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
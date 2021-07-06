import {
    IonContent,
    IonHeader, IonIcon,
    IonItem, IonLabel,
    IonList,
    IonListHeader, IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {bulbOutline, constructOutline, pawOutline, logOutOutline} from "ionicons/icons";
import './Menu.css';

const Menu: React.FC = () => {
    return (
        <IonMenu content-id="main-content">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonListHeader>Opgaver</IonListHeader>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button>
                            <IonIcon icon={pawOutline}/>
                            <IonLabel class="icon-padding">Opgave 1</IonLabel>
                        </IonItem>
                        <IonItem button>
                            <IonIcon icon={constructOutline}/>
                            <IonLabel class="icon-padding">Opgave 2</IonLabel>
                        </IonItem>
                        <IonItem button>
                            <IonIcon icon={bulbOutline}/>
                            <IonLabel class="icon-padding">Opgave 3</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
            <IonItem button>
                <IonIcon icon={logOutOutline}/>
                <IonLabel class="icon-padding">Logud</IonLabel>
            </IonItem>
        </IonMenu>
    );
}

export default Menu;
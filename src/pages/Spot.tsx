import React from 'react';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader, IonIcon, IonItem, IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab1.css';
import {pin, walk, warning} from "ionicons/icons";

const Spot: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Spot</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Spot Subtitle</IonCardSubtitle>
                        <IonCardTitle>Spot Title</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an ion-cardContent element.
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem className="ion-activated">
                        <IonIcon icon={warning} slot="start" />
                        <IonLabel>Card Button Item 1 activated</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={walk} slot="start" />
                        <IonLabel>Card Button Item 2</IonLabel>
                    </IonItem>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};



export default Spot;

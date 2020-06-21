import React, {useState} from 'react';
import {
    IonButton, IonCheckbox,
    IonContent,
    IonHeader, IonIcon,
    IonInput,
    IonItem,
    IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
    IonList,
    IonPage, IonRadio, IonText, IonTextarea,
    IonTitle, IonToggle,
    IonToolbar
} from '@ionic/react';
import './Tab3.css';
import {star, starHalf} from "ionicons/icons";

const Tab3: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Gyms</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Kronkel</IonLabel><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Dreadset</IonLabel><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Dakota</IonLabel><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Jamaica</IonLabel><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={starHalf}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Lucky Luck</IonLabel><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon><IonIcon icon={star}></IonIcon>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;

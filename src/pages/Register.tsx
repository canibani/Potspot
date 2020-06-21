import React, {useState} from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonItemDivider, IonLabel,
    IonList,
    IonPage, IonText, IonTextarea,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Register.css';



const Register: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form>
                    <IonList lines="full" className="ion-no-margin ion-no-padding">
                        <IonItem>
                            <IonLabel position="stacked">First Name <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="text"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Last Name <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="text"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Title</IonLabel>
                            <IonInput></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Address</IonLabel>
                            <IonInput placeholder="Address Line 1"></IonInput>
                            <IonInput placeholder="Address Line 2"></IonInput>
                            <IonInput placeholder="City"></IonInput>
                            <IonInput placeholder="State"></IonInput>
                            <IonInput placeholder="Zip Code"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Notes</IonLabel>
                            <IonTextarea></IonTextarea>
                        </IonItem>
                    </IonList>

                    <div className="ion-padding">
                        <IonButton expand="block" type="submit" className="ion-no-margin">Create account</IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Register;

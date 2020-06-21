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
import './Tab3.css';

const Tab3: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            {/*<IonContent>*/}
            {/*    <IonList>*/}
            {/*        <IonItemDivider>Input with clear button when there is a value</IonItemDivider>*/}
            {/*        <IonItem>*/}
            {/*            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItemDivider>Number type input</IonItemDivider>*/}
            {/*        <IonItem>*/}
            {/*            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItemDivider>Disabled input</IonItemDivider>*/}
            {/*        <IonItem>*/}
            {/*            <IonInput value={text} disabled></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItemDivider>Readonly input</IonItemDivider>*/}
            {/*        <IonItem>*/}
            {/*            <IonInput value={text} readonly></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItemDivider>Inputs with labels</IonItemDivider>*/}

            {/*        <IonItem>*/}
            {/*            <IonLabel>Default Label</IonLabel>*/}
            {/*            <IonInput></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItem>*/}
            {/*            <IonLabel position="floating">Floating Label</IonLabel>*/}
            {/*            <IonInput value={text}></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItem>*/}
            {/*            <IonLabel position="fixed">Fixed Label</IonLabel>*/}
            {/*            <IonInput value={text}></IonInput>*/}
            {/*        </IonItem>*/}

            {/*        <IonItem>*/}
            {/*            <IonLabel position="stacked">Stacked Label</IonLabel>*/}
            {/*            <IonInput value={text}> </IonInput>*/}
            {/*        </IonItem>*/}
            {/*    </IonList>*/}
            {/*</IonContent>*/}
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

export default Tab3;
